<script setup>
	import { onMounted, ref } from "vue";

	import TheCameraRig from "./TheCameraRig.vue";
	import TheStartRoom from "./rooms/TheStartRoom.vue";
	import TheRedRoom from "./rooms/TheRedRoom.vue";
	import TheWhiteRoom from "./rooms/TheWhiteRoom.vue";
	import TheBlueRoom from "./rooms/TheBlueRoom.vue";
	import TheGreenRoom from "./rooms/TheGreenRoom.vue";
	import Wand from "./objects/Wand.vue";

	import "../aframe/simple-grab.js";
	import "../aframe/outline.js";
	import "../aframe/bloom.js";
	import "../aframe/clickable.js";
	import "../aframe/teleport-camera-rig.js";
	import "../aframe/emit-when-near.js";

	defineProps({
		scale: Number,
		overlaySelector: String,
	});

	const allAssetsLoaded = ref(false);

	const lightColor = ref("white");

	const grab = ref(false);
	const handleGrab = () => {
		const magicWand = document.querySelector("#wand");
		const rightHand = document.querySelector("#hand-right");
		if (magicWand) {
			magicWand.setAttribute("rotation", "0 -90 0");
			magicWand.setAttribute("position", "-1 0 -25");
			grab.value = !grab.value;
			changeLightColor("red");
		}
		if (rightHand) {
			rightHand.setAttribute("raycaster", "showLine: false");
		}
	};

	const changeLightColor = (color) => {
		console.log("changeLightColor", color);
		lightColor.value = color;
	};

	const selectColor = (color) => {
		keyDown.value = false;
		changeLightColor(color);
	};

	const keyDown = ref(false);
	const handleLights = (event) => {
		if (!grab.value) {
			return;
		}
		if (event.key === "x") {
			const magicWand = document?.querySelector("#magic-wand-container");
			const colors = document?.querySelector("#colors-choose");
			const wandPosition = new THREE.Vector3();
			const wandRotation = magicWand.getAttribute("rotation");
			const wand = document.querySelector("#wand");
			// get the global position of the wand
			wand.querySelector("#sphere-wand").object3D.getWorldPosition(wandPosition);

			if (wand) {
				colors.setAttribute("position", wandPosition);
				colors.setAttribute("rotation", wandRotation);
			}
		}
	};

	window.addEventListener("mousedown", (event) => {
		if (event.button === 2) {
			keyDown.value = true;
			handleLights({ key: "x" });
		}
	});
	window.addEventListener("mouseup", (event) => {
		if (event.button === 2) {
			keyDown.value = false;
			handleLights({ key: "x" });
		}
	});

	onMounted(() => {
		const handRight = document.querySelector("#hand-right");
		handRight.addEventListener("buttondown", (event) => {
			keyDown.value = true;
			handleLights({ key: "x" });
		});
		handRight.addEventListener("buttonup", (event) => {
			keyDown.value = false;
			handleLights({ key: "x" });
		});
	});
</script>

<template>
	<a-scene background="color: black;" outline="color:red;" stats simple-grab>
		<a-assets @loaded="allAssetsLoaded = true">
			<a-asset-item id="magic-wand" src="assets/magic_wand.glb"></a-asset-item>
			<a-asset-item id="ceil-lantern" src="assets/lantern.glb"></a-asset-item>
			<a-asset-item id="candle-lantern" src="assets/candle_lantern.glb"></a-asset-item>
			<a-asset-item id="portal-frame" src="assets/portal_frame.glb"></a-asset-item>
			<a-asset-item id="book-shelf" src="assets/book_shelf.glb"></a-asset-item>

			<!-- charge a texture -->
			<img id="wood-texture" src="/assets/wooden-background.jpg" />
		</a-assets>

		<template v-if="allAssetsLoaded">
			<a-light type="ambient" :color="lightColor" intensity="2"></a-light>

			<a-entity id="colors-choose" position="0 0 0">
				<a-entity v-if="keyDown" position="0 0 0" rotation="0 90 0">
					<template v-for="(color, index) in ['red', 'green', 'blue', 'white']" :key="color">
						<a-sphere
							v-if="lightColor !== color"
							:radius="0.02"
							:position="`0 ${index === 0 ? '0.04' : index === 1 ? '-0.04' : '0'} ${
								index === 2 ? '0.04' : index === 3 ? '-0.04' : '0'
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
		</template>

		<TheCameraRig />
	</a-scene>
</template>
