<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
	});
</script>

<template>
	<a-entity gltf-model="#book-open" :position="position" :rotation="rotation" scale="0.015 0.015 0.015"> </a-entity>
</template>
