<script setup>
	import TheRoom from "./TheRoom.vue";
	import WizardTable from "../objects/WizardTable.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});
</script>

<template>
	<TheRoom :y="24" :lightColor="lightColor" roomColor="blue" />

	<!-- Add a wizard table -->
	<WizardTable position="0 24 -2.4" rotation="0 180 0" />
</template>
