<script setup>
	import { ref } from "vue";

	import TheRoom from "./TheRoom.vue";
	import Xylophone from "../objects/Xylophone.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const emit = defineEmits(["levelUp"]);

	const y = 24;
	const roomColor = "red";
	const lvlUpColor = "white";

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
	<TheRoom
		:y="y"
		:lightColor="lightColor"
		:roomColor="roomColor"
		:lvlUpColor="lvlUpColor"
		:isSuccess="isSequenceFinish"
		@levelUp="$emit('levelUp')" />

	<!-- Add a xylophone -->
	<Xylophone :position="`-1.73 ${y + 1} 1.76`" rotation="0 -57 0" @playNote="playNote($event)" />
</template>
