<script setup>
	defineProps({
		lightColor: String,
	});

	const emit = defineEmits(["grab"]);

	const handleGrab = () => {
		emit("grab");
	};
</script>

<template>
	<a-box
		id="magic-wand-container"
		position="0 1.5 -0.5"
		rotation="0 0 -90"
		scale="0.008 0.008 0.008"
		width="70"
		height="2"
		depth="3"
		color="blue"
		opacity="0"
		class="grab-hitbox"
		simple-grab
		clickable
		outline-on-event
		teleport-camera-rig="y: 24; handleRotation: false"
		@grab="handleGrab">
		<a-entity id="wand" gltf-model="#magic-wand" rotation="90 0 0" position="-9 0 0">
			<a-entity position="-25 0.5 0.3" id="sphere-wand" obb-collider>
				<a-sphere
					radius="0.5"
					:color="lightColor"
					shader="flat"
					animation="property: scale; to: 1.4 1.4 1.4; dir: alternate; dur: 2000; loop: true"></a-sphere>

				<a-light
					type="point"
					radius="2"
					:color="lightColor"
					intensity="0.5"
					animation="property: intensity; to: 1; dir: alternate; dur: 2000; loop: true">
				</a-light>
			</a-entity>
		</a-entity>
	</a-box>
</template>
