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
	const grab = ref(false);
	const keyDown = ref(false);

	const handleGrab = () => {
		const magicWand = document.querySelector("#wand");
		const rightHand = document.querySelector("#hand-right");
		if (magicWand) {
			magicWand.setAttribute("rotation", "0 -90 0");
			magicWand.setAttribute("position", "-1 0 -25");
			grab.value = !grab.value;
			changeLightColor("blue");
		}
		if (rightHand) {
			rightHand.setAttribute("raycaster", "showLine: false");
		}
	};

	const changeLightColor = (color) => {
		console.log("changeLightColor to ", color);
		lightColor.value = color;
	};

	const selectColor = (color) => {
		keyDown.value = false;
		changeLightColor(color);
	};

	const handleLights = () => {
		if (!grab.value) return;
		const magicWand = document.querySelector("#magic-wand-container");
		const wandPosition = new THREE.Vector3();
		const wandRotation = magicWand.getAttribute("rotation");
		
		const wand = document.querySelector("#wand");
		wand.querySelector("#sphere-wand").object3D.getWorldPosition(wandPosition);
		
		const colors = document.querySelector("#colors-choose");
		colors.setAttribute("position", wandPosition);
		colors.setAttribute("rotation", wandRotation);
	};

	const setupEventListeners = () => {
		window.addEventListener("mousedown", (event) => {
			if (event.button === 2) {
				keyDown.value = true;
				handleLights();
			}
		});
		window.addEventListener("mouseup", (event) => {
			if (event.button === 2) {
				keyDown.value = false;
				handleLights();
			}
		});

		const handRight = document.querySelector("#hand-right");
		handRight.addEventListener("buttondown", () => {
			keyDown.value = true;
			handleLights();
		});
		handRight.addEventListener("buttonup", () => {
			keyDown.value = false;
			handleLights();
		});
	};

	onMounted(setupEventListeners);
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

			<!-- charge a texture -->
			<img id="wood-texture" src="/assets/textures/wooden-background.jpg" />
			<img id="portal-texture" src="/assets/textures/portalTexture.jpg" />
		</a-assets>

		<template v-if="allAssetsLoaded">
			<a-light type="ambient" :color="lightColor" intensity="2"></a-light>

			<a-entity id="colors-choose" position="0 0 0">
				<a-entity v-if="keyDown" position="0 0 0" rotation="0 90 0">
					<template v-for="(color, index) in ['red', 'green', 'blue', 'white']" :key="color">
						<a-sphere
							v-if="lightColor !== color"
							:radius="0.02"
							:position="`0 ${index === 0 ? '0.06' : index === 1 ? '-0.06' : '0'} ${
								index === 2 ? '0.06' : index === 3 ? '-0.06' : '0'
							}`"
							:color="color"
							shader="flat"
							emit-when-near="target: #sphere-wand; distance:0.03;"
							:teleport-camera-rig="'y: ' + (index + 1) * 8 + '; handleRotation: false'"
							@click="selectColor(color)"></a-sphere>
					</template>
				</a-entity>
			</a-entity>

			<Wand :lightColor="lightColor" @grab="handleGrab" />

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
