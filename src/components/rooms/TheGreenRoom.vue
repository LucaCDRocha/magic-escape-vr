<script setup>
	import { ref } from "vue";

	import BaseRoom from "./BaseRoom.vue";
	import BookShelf from "../objects/BookShelf.vue";
	import CandleLantern from "../objects/CandleLantern.vue";
	import CeilLantern from "../objects/CeilLantern.vue";
	import Candle from "../objects/Candle.vue";

	import "../../aframe/simple-grab.js";
	import "../../aframe/outline.js";
	import "../../aframe/clickable.js";
	import "../../aframe/teleport-camera-rig.js";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
		candlesPositions: {
			type: Array,
			default: () => [
				[0, 0, -0.4],
				[0, 0, -0.4],
				[0, 0, -0.4],
			],
		},
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
	<BaseRoom :position="[0, 16, 0]" :size="6" :lightColor="lightColor" />
	<!-- Add a ceiling light -->
	<CeilLantern position="0 18.15 0" :color="lightColor" />
	<!-- Add a candle lantern -->
	<CandleLantern position="-2.5 16.04 -2.5" :color="lightColor" />
	<!-- Add a book shelf -->
	<BookShelf position="2 16 -2.8" rotation="0 180 0" />

	<!-- Add a candle -->

	<Candle
		v-for="(position, index) in props.candlesPositions"
		:key="index"
		:classToLightUp="'candle-' + index"
		:position="`${position[0]} ${position[1] + 16} ${position[2]}`"
		rotation="0 180 0"
		:color="lightColor"
		:canLightUp="true"
		@lightUp="handleLightUp()" />
</template>
