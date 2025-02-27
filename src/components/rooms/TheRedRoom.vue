<script setup>
	import TheRoom from "./TheRoom.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});
</script>

<template>
	<TheRoom :y="8" :lightColor="lightColor" roomColor="red" />
</template>
