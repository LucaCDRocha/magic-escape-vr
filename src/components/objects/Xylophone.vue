<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
	});

	const emit = defineEmits(["playNote"]);
	let audioContext = null;

	const playNote = (e, tone) => {
		if (e === "sphere-wand") {
			// TODO: play sound
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
