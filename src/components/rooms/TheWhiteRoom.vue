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

	<a-text
		value="You can escape now!"
		:position="`0 ${y + 2} 2.95`"
		rotation="0 180 0"
		color="white"
		opacity="0.8"
		align="center"></a-text>
</template>
