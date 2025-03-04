<script setup>
	import TheRoom from "./TheRoom.vue";
	import ExitPortal from "../objects/ExitPortal.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const y = 32;
	const roomColor = "white";

	const emit = defineEmits(["end"]);
</script>

<template>
	<TheRoom :y="y" :lightColor="lightColor" :roomColor="roomColor" @end="emit('end')" />
</template>
