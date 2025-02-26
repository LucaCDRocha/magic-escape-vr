<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
		open: { type: Boolean, default: false },
	});
</script>

<template>
	<!-- Add a portal frame -->
	<a-entity gltf-model="#portal-frame" :position="position" :rotation="rotation" scale="0.0065 0.0065 0.0065">
	</a-entity>
</template>
