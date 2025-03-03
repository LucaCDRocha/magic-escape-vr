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
</template>
