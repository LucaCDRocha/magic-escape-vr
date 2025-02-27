<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
	});
</script>

<template>
	<!-- Add a book shelf -->
	<a-entity gltf-model="#book-shelf" :position="position" :rotation="rotation" scale="0.6 0.6 0.6"> </a-entity>
</template>
