<script setup>
	import { onMounted, ref } from "vue";

	import TheCameraRig from "./TheCameraRig.vue";
	import TheStartRoom from "./TheStartRoom.vue";
	import TheRedRoom from "./TheRedRoom.vue";

	import "../aframe/simple-grab.js";
	import "../aframe/outline.js";
	import "../aframe/bloom.js";
	import "../aframe/clickable.js";
	import "../aframe/teleport-camera-rig.js";

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
		lightColor.value = color;
	};

	const keyDown = ref(false);
	const handleLights = (event) => {
		if (!grab.value) {
			return;
		}
		if (event.key === "l") {
			changeLightColor("white");
		}
		if (event.key === "r") {
			changeLightColor("red");
		}
		if (event.key === "g") {
			changeLightColor("green");
		}
		if (event.key === "b") {
			changeLightColor("blue");
		}
		if (event.key === "x") {
			const magicWand = document?.querySelector("#magic-wand-container");
			const colors = document?.querySelector("#colors-choose");
			const wandPosition = new THREE.Vector3();
			const wandRotation = magicWand.getAttribute("rotation");
			const wand = document.querySelector("#wand");
			// get the global position of the wand
			wand.querySelector("a-sphere").object3D.getWorldPosition(wandPosition);
			console.log(wandPosition);

			if (wand) {
				colors.setAttribute("position", wandPosition);
				colors.setAttribute("rotation", wandRotation);
			}
		}
	};

	window.addEventListener("keydown", handleLights);
	window.addEventListener("mousedown", (event) => {
		if (event.button === 1) {
			keyDown.value = true;
			handleLights({ key: "x" });
		}
	});
	window.addEventListener("mouseup", (event) => {
		if (event.button === 1) {
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
			<a-light type="ambient" :color="lightColor" intensity="0.1"></a-light>

			<a-entity id="colors-choose" position="0 0 0">
				<a-entity v-if="keyDown" position="0 0 0" rotation="0 90 0">
					<a-sphere radius="0.02" position="0 0 0.04" color="blue" shader="flat"></a-sphere>
					<a-sphere radius="0.02" position="0 0.04 0" color="green" shader="flat"></a-sphere>
					<a-sphere radius="0.02" position="0 0 -0.04" color="red" shader="flat"></a-sphere>
					<a-sphere radius="0.02" position="0 -0.04 0" color="white" shader="flat"></a-sphere>
				</a-entity>
			</a-entity>

			<!-- Add a magic wand -->
			<a-box
				id="magic-wand-container"
				position="0 1.5 -0.5"
				rotation="0 0 -90"
				scale="0.008 0.008 0.008"
				width="70"
				height="2"
				depth="3"
				color="blue"
				opacity="0"
				class="grab-hitbox"
				simple-grab
				clickable
				outline-on-event
				teleport-camera-rig="y: 8; handleRotation: false"
				@grab="handleGrab">
				<a-entity id="wand" gltf-model="#magic-wand" rotation="90 0 0" position="-9 0 0">
					<a-entity position="-25 0.5 0.3">
						<a-sphere
							radius="0.5"
							:color="lightColor"
							shader="flat"
							animation="property: scale; to: 1.4 1.4 1.4; dir: alternate; dur: 2000; loop: true"></a-sphere>

						<a-light
							type="point"
							radius="2"
							:color="lightColor"
							intensity="0.5"
							animation="property: intensity; to: 1; dir: alternate; dur: 2000; loop: true">
						</a-light>
					</a-entity>
				</a-entity>
			</a-box>

			<TheStartRoom :lightColor="lightColor" />
			<TheRedRoom :lightColor="lightColor" />
		</template>

		<TheCameraRig />
	</a-scene>
</template>
