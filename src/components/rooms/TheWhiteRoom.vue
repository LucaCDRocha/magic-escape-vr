<script setup>
	import TheRoom from "./TheRoom.vue";
	import ExitPortal from "../objects/ExitPortal.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});
</script>

<template>
	<TheRoom :y="32" :lightColor="lightColor" roomColor="white" />
	<!-- Add an exit portal -->
	<ExitPortal position="0 32 -2.75" :open="true" />
</template>
