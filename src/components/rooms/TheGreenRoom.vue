<script setup>
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
	});
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
	<Candle classToLightUp="slave" position="0 16.4 -0.4" rotation="0 180 0" :color="lightColor" :canLightUp="true" />
</template>
