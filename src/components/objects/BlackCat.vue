<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
	});
</script>

<template>
	<a-entity gltf-model="#black-cat" :position="position" :rotation="rotation" scale="0.5 0.5 0.5" look-at-horizon> </a-entity>
</template>
