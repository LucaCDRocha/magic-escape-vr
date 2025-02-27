<script setup>
	import BaseRoom from "./BaseRoom.vue";
	import BookShelf from "../objects/BookShelf.vue";
	import CandleLantern from "../objects/CandleLantern.vue";
	import CeilLantern from "../objects/CeilLantern.vue";
	import WizardTable from "../objects/WizardTable.vue";
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
	<BaseRoom :position="[0, 24, 0]" :size="6" :lightColor="lightColor" />
	<!-- Add a ceiling light -->
	<CeilLantern position="0 26.15 0" :color="lightColor" />
	<!-- Add a candle lantern -->
	<CandleLantern position="-2.5 24.04 -2.5" :color="lightColor" />
	<!-- Add a book shelf -->
	<BookShelf position="2 24 -2.8" rotation="0 180 0" />
	<!-- Add a wizard table -->
	<WizardTable position="0 24 -2.4" rotation="0 180 0" />

	<!-- Add a candle -->
	<Candle position="0 24.4 -0.4" classToLightUp="slave" rotation="0 180 0" :color="'orange'" :canLightUp="true" />
	<Candle class="slave" position="0.5 24.4 -0.4" rotation="0 180 0" :color="'red'" />
</template>
