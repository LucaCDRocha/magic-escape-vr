<script setup>
	import BaseRoom from "./BaseRoom.vue";
	import CeilLantern from "../objects/CeilLantern.vue";

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
	<BaseRoom :position="[0, 0, 0]" :size="4" :lightColor="lightColor" />
	<!-- Add a ceiling light -->
	<CeilLantern position="0 2.15 0" :color="lightColor" />

	<!-- Add a xylophone -->
	<Xylophone position="0 1 -1" rotation="0 180 0" @playNote="playNote($event)" />
</template>
