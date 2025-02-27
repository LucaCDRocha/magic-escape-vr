<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
	});
</script>

<template>
	<a-entity gltf-model="#rectangle-table" :position="position" :rotation="rotation" scale="0.153 0.153 0.153"> </a-entity>
</template>
