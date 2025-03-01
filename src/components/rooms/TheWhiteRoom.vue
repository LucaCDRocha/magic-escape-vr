<script setup>
	import TheRoom from "./TheRoom.vue";
	import ExitPortal from "../objects/ExitPortal.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const y = 32;
	const roomColor = "white";
</script>

<template>
	<TheRoom :y="y" :lightColor="lightColor" :roomColor="roomColor" />
	<!-- Add an exit portal -->
	<ExitPortal position="0 32 -2.75" :open="true" />
</template>
