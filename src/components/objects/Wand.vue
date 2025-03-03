<script setup>
	import { ref, onMounted } from "vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
		lvl: { type: Number, default: 0 },
	});

	const emit = defineEmits(["grab", "colorChange"]);

	const keyDown = ref(false);
	const isGrabbed = ref(false);
	const isVR = document.querySelector("a-scene").is("vr-mode");

	const handleGrab = () => {
		const magicWand = document.querySelector("#wand");
		const rightHand = document.querySelector("#hand-right");
		if (magicWand) {
			magicWand.setAttribute("rotation", "0 -90 0");
			magicWand.setAttribute("position", "-1 0 -25");

			isGrabbed.value = !isGrabbed.value;
			emit("colorChange", "blue");
		}
		if (rightHand) {
			rightHand.setAttribute("raycaster", "showLine: false");
		}
	};

	const selectColor = (color) => {
		keyDown.value = false;
		emit("colorChange", color);
	};

	const handleLights = () => {
		if (!keyDown.value) return;

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
			if (event.button === 2 && isGrabbed.value) {
				keyDown.value = true;
				handleLights();
			}
		});
		window.addEventListener("mouseup", (event) => {
			if (event.button === 2 && isGrabbed.value) {
				keyDown.value = false;
				handleLights();
			}
		});

		const handRight = document.querySelector("#hand-right");
		handRight.addEventListener("buttondown", () => {
			if (isGrabbed.value) {
				keyDown.value = true;
				handleLights();
			}
		});
		handRight.addEventListener("buttonup", () => {
			if (isGrabbed.value) {
				keyDown.value = false;
				handleLights();
			}
		});
	};

	onMounted(setupEventListeners);
</script>

<template>
	<a-box
		id="magic-wand-container"
		:position="position"
		:rotation="rotation"
		scale="0.008 0.008 0.008"
		width="70"
		height="2"
		depth="3"
		color="blue"
		opacity="0"
		simple-grab
		clickable
		outline-on-event
		teleport-camera-rig="y: 8; handleRotation: false"
		@grab="handleGrab">
		<a-entity id="wand" gltf-model="#magic-wand" rotation="90 0 0" position="-9 0 0">
			<a-entity position="-25 0.5 0.3" id="sphere-wand" obb-collider>
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

	<a-entity id="colors-choose" position="0 0 0">
		<a-entity v-if="keyDown" position="0 0 0" rotation="0 90 0">
			<template v-for="(color, index) in ['blue', 'green', 'red', 'white']" :key="color">
				<a-sphere
					v-if="lightColor !== color && index <= lvl"
					:radius="0.02"
					:position="`0 ${index === 0 ? '0.06' : index === 1 ? '-0.06' : '0'} ${
						index === 2 ? '0.06' : index === 3 ? '-0.06' : '0'
					}`"
					:color="color"
					shader="flat"
					:emit-when-near="`target: #sphere-wand; distance: ${isVR ? '0.02' : '0.03'}`"
					:teleport-camera-rig="'y: ' + (index + 1) * 8 + '; handleRotation: false'"
					@click="selectColor(color)"></a-sphere>
			</template>
		</a-entity>
	</a-entity>
</template>
