<script setup>
	import { ref } from "vue";

	import TheRoom from "./TheRoom.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const y = 16;
	const roomColor = "green";
	const lvlUpColor = "red";

	const nbOfCandles = 4;
	const nbCandlesLit = ref(0);
	const allCandlesLit = ref(false);

	const emit = defineEmits(["levelUp"]);

	const handleLightUp = () => {
		if (allCandlesLit.value) {
			return;
		}

		nbCandlesLit.value++;
		console.log("handleLightUp", nbCandlesLit.value);

		if (nbCandlesLit.value === nbOfCandles) {
			allCandlesLit.value = true;
			console.log("All candles are lit!");
		}
	};
</script>

<template>
	<TheRoom
		:y="y"
		:lightColor="lightColor"
		:lvlUpColor="lvlUpColor"
		:roomColor="roomColor"
		:isSuccess="allCandlesLit"
		@lightUp="handleLightUp()"
		@levelUp="$emit('levelUp')" />
</template>
