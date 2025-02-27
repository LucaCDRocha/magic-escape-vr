<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
	});
</script>

<template>
	<a-entity gltf-model="#wizard-table" :position="position" :rotation="rotation" scale="0.26 0.26 0.26"> </a-entity>
</template>
