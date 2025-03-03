<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
	});

	const emit = defineEmits(["playNote"]);

	let audioCtx;

	const playNote = (e, tone) => {
		if (e === "sphere-wand") {
			// Close the previous audio context if it exists
			if (audioCtx) {
				audioCtx.close();
			}

			// Create a new audio context
			audioCtx = new (window.AudioContext || window.webkitAudioContext)();

			// Create an oscillator
			const oscillator = audioCtx.createOscillator();

			// Set the type of the oscillator
			oscillator.type = "triangle";

			// Set the frequency of the oscillator based on the tone
			const frequencies = {
				c: 261.63,
				d: 293.66,
				e: 329.63,
				f: 349.23,
				g: 392.0,
				a: 440.0,
				b: 493.88,
				"c+": 523.25,
			};
			oscillator.frequency.setValueAtTime(frequencies[tone], audioCtx.currentTime);

			// Create a gain node
			const gainNode = audioCtx.createGain();

			// Create a bandpass filter
			const bandpass = audioCtx.createBiquadFilter();
			bandpass.type = "bandpass";
			bandpass.frequency.setValueAtTime(frequencies[tone], audioCtx.currentTime);
			bandpass.Q.setValueAtTime(10, audioCtx.currentTime);

			// Connect the oscillator to the bandpass filter
			oscillator.connect(bandpass);

			// Connect the bandpass filter to the gain node
			bandpass.connect(gainNode);

			// Connect the gain node to the destination (speakers)
			gainNode.connect(audioCtx.destination);

			// Set the gain value to create a volume envelope
			gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
			gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
			gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);

			// Start the oscillator
			oscillator.start();

			// Stop the oscillator after 1 second
			oscillator.stop(audioCtx.currentTime + 1);

			// Handle the ended event to clean up resources
			oscillator.onended = () => {
				audioCtx.close();
				audioCtx = null;
			};

			emit("playNote", tone);
		}
	};
</script>

<template>
	<a-entity gltf-model="#xylophone" :position="position" :rotation="rotation" scale="0.05 0.05 0.05">
		<template v-for="(tone, i) in ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'c+']" :key="i">
			<a-box
				:position="`${4.65 - i * 1.4} 1.2 0`"
				width="1.1"
				height="0.01"
				:depth="`${7.1 - i * 0.4}`"
				clickable
				obb-collider
				@obbcollisionstarted="playNote($event.detail.withEl.id, tone)"
				@click="playNote('sphere-wand', tone)"
				:visible="false"></a-box>
			<a-text
				:value="tone"
				:position="`${4.65 - i * 1.4} 1.5 0`"
				rotation="-90 180 0"
				color="white"
				scale="3 3 3"
				align="center"></a-text>
		</template>
	</a-entity>
</template>
