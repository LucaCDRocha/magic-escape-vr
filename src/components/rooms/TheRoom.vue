<script setup>
	import BaseRoom from "./BaseRoom.vue";
	import BookShelf from "../objects/BookShelf.vue";
	import CandleLantern from "../objects/CandleLantern.vue";
	import CeilLantern from "../objects/CeilLantern.vue";
	import Candle from "../objects/Candle.vue";

	const candlesPositions = [
		[0, 0, -0.4],
		[1, 0, -0.4],
		[-1, 0, -0.4],
	];

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});
</script>

<template>
	<BaseRoom :position="[0, 32, 0]" :size="6" :lightColor="lightColor" />
	<!-- Add a ceiling light -->
	<CeilLantern position="0 34.15 0" :color="lightColor" />
	<!-- Add a candle lantern -->
	<CandleLantern position="-2.5 32.04 -2.5" :color="lightColor" />
	<!-- Add a book shelf -->
	<BookShelf position="2 32 -2.8" rotation="0 180 0" />

	<!-- Add a candle -->
	<Candle
		v-for="(position, index) in candlesPositions"
		:key="index"
		:class="'candle-' + index"
		:position="`${position[0]} ${position[1] + 32} ${position[2]}`"
		rotation="0 180 0"
		:color="lightColor" />
</template>
