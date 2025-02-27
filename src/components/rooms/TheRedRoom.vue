<script setup>
	import BaseRoom from "./BaseRoom.vue";
	import BookShelf from "../objects/BookShelf.vue";
	import CandleLantern from "../objects/CandleLantern.vue";
	import CeilLantern from "../objects/CeilLantern.vue";
	import ExitPortal from "../objects/ExitPortal.vue";
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
</script>

<template>
	<BaseRoom :position="[0, 8, 0]" :size="6" :lightColor="lightColor" />
	<!-- Add a ceiling light -->
	<CeilLantern position="0 10.15 0" :color="lightColor" />
	<!-- Add a candle lantern -->
	<CandleLantern position="-2.5 8.04 -2.5" :color="lightColor" />
	<!-- Add a book shelf -->
	<BookShelf position="2 8 -2.8" rotation="0 180 0" />
	<!-- Add a portal -->
	<ExitPortal position="0 8 -2.75" />

	<!-- Add a candle -->
	<Candle
		v-for="(position, index) in props.candlesPositions"
		:key="index"
		:class="'candle-' + index"
		:position="`${position[0]} ${position[1] + 8} ${position[2]}`"
		rotation="0 180 0"
		:color="lightColor" />
</template>
