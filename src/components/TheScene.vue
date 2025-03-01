<script setup>
	import { onMounted, ref } from "vue";

	import TheCameraRig from "./TheCameraRig.vue";
	import TheStartRoom from "./rooms/TheStartRoom.vue";
	import TheRedRoom from "./rooms/TheRedRoom.vue";
	import TheWhiteRoom from "./rooms/TheWhiteRoom.vue";
	import TheBlueRoom from "./rooms/TheBlueRoom.vue";
	import TheGreenRoom from "./rooms/TheGreenRoom.vue";
	import TheEndRoom from "./rooms/TheEndRoom.vue";
	import Wand from "./objects/Wand.vue";

	import "../aframe/simple-grab.js";
	import "../aframe/outline.js";
	import "../aframe/bloom.js";
	import "../aframe/clickable.js";
	import "../aframe/teleport-camera-rig.js";
	import "../aframe/emit-when-near.js";
	import "../aframe/listen-to.js";

	defineProps({
		scale: Number,
		overlaySelector: String,
	});

	const allAssetsLoaded = ref(false);
	const lightColor = ref("white");

	const changeLightColor = (color) => {
		console.log("changeLightColor to ", color);
		lightColor.value = color;
	};

</script>

<template>
	<a-scene
		background="color: black;"
		outline="color:red;"
		stats
		simple-grab
		obb-collider="showColliders: false"
		:fog="'type: exponential; color: ' + lightColor + '; density: 0.01'">
		<a-assets @loaded="allAssetsLoaded = true">
			<a-asset-item id="magic-wand" src="assets/objects/magic_wand.glb"></a-asset-item>
			<a-asset-item id="ceil-lantern" src="assets/objects/lantern.glb"></a-asset-item>
			<a-asset-item id="candle-lantern" src="assets/objects/candle_lantern.glb"></a-asset-item>
			<a-asset-item id="portal-frame" src="assets/objects/portal_frame.glb"></a-asset-item>
			<a-asset-item id="book-shelf" src="assets/objects/book_shelf.glb"></a-asset-item>
			<a-asset-item id="rectangle-table" src="assets/objects/mahogany_table.glb"></a-asset-item>
			<a-asset-item id="rectangle-table-chairs" src="assets/objects/table_and_chairs.glb"></a-asset-item>
			<a-asset-item id="round-table" src="assets/objects/table.glb"></a-asset-item>
			<a-asset-item id="wizard-table" src="assets/objects/wizard_table.glb"></a-asset-item>
			<a-asset-item id="candle" src="assets/objects/lowpoly_candle.glb"></a-asset-item>
			<a-asset-item id="xylophone" src="assets/objects/kids_xylophone.glb"></a-asset-item>
			<a-asset-item id="book-open" src="assets/objects/book_open.glb"></a-asset-item>

			<!-- charge a texture -->
			<img id="wood-texture" src="/assets/textures/wooden-background.jpg" />
			<img id="portal-texture" src="/assets/textures/portalTexture.jpg" />
		</a-assets>

		<template v-if="allAssetsLoaded">
			<a-light type="ambient" :color="lightColor" intensity="1"></a-light>

			<Wand position="0 1.5 -0.5" rotation="0 0 -90" :lvl="0" :lightColor="lightColor" @colorChange="changeLightColor" />

			<TheStartRoom :lightColor="lightColor" />
			<TheRedRoom :lightColor="lightColor" />
			<TheWhiteRoom :lightColor="lightColor" />
			<TheBlueRoom :lightColor="lightColor" />
			<TheGreenRoom :lightColor="lightColor" />
			<TheEndRoom :lightColor="lightColor" />
		</template>

		<TheCameraRig />
	</a-scene>
</template>
