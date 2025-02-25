<script setup>
	import { ref } from "vue";

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

	const handleGrab = () => {
		const magicWand = document.querySelector("#wand");
		if (magicWand) {
			magicWand.setAttribute("rotation", "0 -90 0");
			magicWand.setAttribute("position", "-1 0 -25");
			changeLightColor("red");
		}
	};

	const changeLightColor = (color) => {
		lightColor.value = color;
	};
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
				teleport-camera-rig="y: 8"
				@grab="handleGrab">
				<a-entity id="wand" gltf-model="#magic-wand" rotation="90 0 0" position="-9 0 0">
					<a-entity
						position="-25 0.5 0.3"
						animation="property: scale; to: 1.4 1.4 1.4; dir: alternate; dur: 2000; loop: true">
						<a-sphere radius="0.5" :color="lightColor" shader="flat"></a-sphere>
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

			<TheStartRoom />
			<TheRedRoom :lightColor="lightColor" />
		</template>

		<TheCameraRig />
	</a-scene>
</template>
