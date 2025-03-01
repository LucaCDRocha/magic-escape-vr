<script setup>
	import { ref } from "vue";

	import TheRoom from "./TheRoom.vue";
	import WizardTable from "../objects/WizardTable.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const y = 8;
	const roomColor = "blue";
	const lvlUpColor = "green";
	const isSuccess = ref(false);

	const emit = defineEmits(["levelUp"]);

	setTimeout(() => {
		isSuccess.value = true;
	}, 1000);
</script>

<template>
	<TheRoom
		:y="y"
		:lightColor="lightColor"
		:roomColor="roomColor"
		:lvlUpColor="lvlUpColor"
		:isSuccess="isSuccess"
		@levelUp="$emit('levelUp')" />

	<!-- Add a wizard table -->
	<WizardTable :position="`0 ${y} -2.4`" rotation="0 180 0" />
</template>
