<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
	});
</script>

<template>
	<a-entity gltf-model="#round-table" :position="position" :rotation="rotation" scale="0.31 0.31 0.31"> </a-entity>
</template>
