<script setup>
	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		color: { type: String, default: "white" },
	});
</script>

<template>
	<!-- Add a ceiling light -->
	<a-entity gltf-model="#ceil-lantern" :position="position">
		<a-entity position="0 0 0">
			<a-sphere radius="0.07" :color="color" shader="flat"></a-sphere>
			<a-light type="point" :color="color" intensity="0.5" distance="5"></a-light>
		</a-entity>
	</a-entity>
</template>
