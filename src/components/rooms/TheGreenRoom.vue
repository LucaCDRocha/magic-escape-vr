<script setup>
	import { ref } from "vue";

	import TheRoom from "./TheRoom.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const nbOfCandles = 3;
	const nbCandlesLit = ref(0);
	const allCandlesLit = ref(false);

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
	<TheRoom :y="16" :lightColor="lightColor" roomColor="green" @lightUp="handleLightUp()" />
</template>
