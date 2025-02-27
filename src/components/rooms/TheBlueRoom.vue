<script setup>
	import TheRoom from "./TheRoom.vue";
	import WizardTable from "../objects/WizardTable.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	import { ref } from "vue";

	import Xylophone from "../objects/Xylophone.vue";

	const rightSequence = ["f", "a", "d", "e"];
	const currentSequence = ref([]);
	const isSequenceFinish = ref(false);

	const playNote = (note) => {
		if (isSequenceFinish.value) {
			return;
		}

		currentSequence.value.push(note);

		if (currentSequence.value.length > rightSequence.length) {
			currentSequence.value.shift();
		}

		if (currentSequence.value.join("") === rightSequence.join("")) {
			isSequenceFinish.value = true;
			console.log("Sequence is correct!");
		}
	};
</script>

<template>
	<TheRoom :y="24" :lightColor="lightColor" roomColor="blue" />

	<!-- Add a wizard table -->
	<WizardTable position="0 24 -2.4" rotation="0 180 0" />

	<!-- Add a xylophone -->
	<Xylophone position="0 25 -1" rotation="0 180 0" @playNote="playNote($event)" />
</template>
