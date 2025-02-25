<script setup>
	import BookShelf from "./objects/BookShelf.vue";
	import CandleLantern from "./objects/CandleLantern.vue";
	import CeilLantern from "./objects/CeilLantern.vue";
	import "../aframe/simple-grab.js";
	import "../aframe/outline.js";
	import "../aframe/clickable.js";
	import "../aframe/teleport-camera-rig.js";

    const props = defineProps({
        lightColor: { type: String, default: "white" },
    });
</script>

<template>
	<!-- Add a ceiling light -->
	<CeilLantern position="0 10.15 0" :color="lightColor" />

	<!-- Add a candle lantern -->
	<CandleLantern position="0 8 -2.5" :color="lightColor" />

	<!-- Add a book shelf -->
	<BookShelf position="2 8 -2.8" rotation="0 180 0" />

	<!-- Add walls around the player -->
	<a-box position="0 9.4 -3" rotation="0 0 0" width="6" height="2.8" depth="0.1" src="#wood-texture"></a-box>
	<a-box position="0 9.4 3" rotation="0 180 0" width="6" height="2.8" depth="0.1" src="#wood-texture"></a-box>
	<a-box position="-3 9.4 0" rotation="0 90 0" width="6" height="2.8" depth="0.1" src="#wood-texture"></a-box>
	<a-box position="3 9.4 0" rotation="0 -90 0" width="6" height="2.8" depth="0.1" src="#wood-texture"></a-box>

	<!-- add ground -->
	<a-box position="0 8 0" rotation="-90 0 0" width="6" height="6" depth="0.1" src="#wood-texture"></a-box>

	<!-- add ceiling -->
	<a-box position="0 10.8 0" rotation="90 0 0" width="6" height="6" depth="0.1" src="#wood-texture"></a-box>
</template>
