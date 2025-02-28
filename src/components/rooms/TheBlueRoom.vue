<script setup>
	import TheRoom from "./TheRoom.vue";
	import WizardTable from "../objects/WizardTable.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const y = 24;
</script>

<template>
	<TheRoom :y="y" :lightColor="lightColor" roomColor="blue" />

	<!-- Add a wizard table -->
	<WizardTable :position="`0 ${y} -2.4`" rotation="0 180 0" />
</template>
