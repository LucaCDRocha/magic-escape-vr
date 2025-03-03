<script setup>
	import PortalTeleporter from "../PortalTeleporter.vue";

	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
		open: { type: Boolean, default: false },
	});
</script>

<template>
	<a-entity gltf-model="#portal-frame" :position="position" :rotation="rotation" scale="0.0063 0.0063 0.0063">
		<PortalTeleporter
			v-if="open"
			label="Exit"
			material="src: #portal-texture"
			position="0 190 0"
			rotation="0 0 0"
			scale="100 190 200"
			:y="40" />
	</a-entity>
</template>
