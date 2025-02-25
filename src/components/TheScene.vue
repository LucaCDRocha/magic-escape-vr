<script setup>
	import { ref } from "vue";

	import TheCameraRig from "./TheCameraRig.vue";
	import TheMainRoom from "./TheMainRoom.vue";
	import TheLifeCubeRoom from "./TheLifeCubeRoom.vue";
	import ThePhysicRoom from "./ThePhysicRoom.vue";

	import "../aframe/simple-grab.js";
	import "../aframe/outline.js";
	import "../aframe/bloom.js";
	import "../aframe/clickable.js";

	defineProps({
		scale: Number,
		overlaySelector: String,
	});

	const allAssetsLoaded = ref(false);

	const handleGrab = () => {
		const magicWand = document.querySelector("#wand");
		if (magicWand) {
			magicWand.setAttribute("rotation", "0 -90 0");
			magicWand.setAttribute("position", "-1 0 -25");
		}
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
			<a-light type="ambient" color="#fff" intensity="0"></a-light>

			<a-box position="0 0.5 -2" color="#3C1518"></a-box>

			<!-- Add a book shelf -->
			<a-entity gltf-model="#book-shelf" position="3 0 -4.8" rotation="0 180 0" scale="0.6 0.6 0.6">
				<a-entity position="0 0 0"> </a-entity>
			</a-entity>

			<!-- Add a portal frame -->
			<a-entity gltf-model="#portal-frame" position="0 0 -4.7" scale="0.0075 0.0075 0.0075">
				<a-entity position="0 0 0"> </a-entity>
			</a-entity>

			<!-- Add a ceiling light -->
			<a-entity gltf-model="#ceil-lantern" position="0 2.4 0">
				<a-entity position="0 0 0">
					<a-sphere radius="0.07" color="white" shader="flat"></a-sphere>
					<a-light type="point" color="white" intensity="0.5" distance="5"></a-light>
				</a-entity>
			</a-entity>

			<!-- Add a candle lantern -->
			<a-entity gltf-model="#candle-lantern" position="0 0 0" scale="0.004 0.004 0.004">
				<a-cylinder position="0 0 0" color="#3C1518" height="100" radius="10"></a-cylinder>
				<a-entity position="0 50 0">
					<a-sphere radius="9.6" color="white" shader="flat"></a-sphere>
					<a-light
						type="point"
						color="white"
						intensity="0.5"
						distance="5"
						animation="property: intensity; to: 1; dir: alternate; dur: 3000; loop: true"></a-light>
				</a-entity>
			</a-entity>

			<!-- Add a magic wand -->
			<a-box
				id="magic-wand-container"
				position="0 1 -1"
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
				@grab="handleGrab">
				<a-entity id="wand" gltf-model="#magic-wand" rotation="90 0 0" position="-9 0 0">
					<a-entity
						position="-25 0.5 0.3"
						animation="property: scale; to: 1.4 1.4 1.4; dir: alternate; dur: 2000; loop: true">
						<a-sphere radius="0.5" color="white" shader="flat"></a-sphere>
						<a-light
							type="point"
							radius="2"
							color="white"
							intensity="0.5"
							animation="property: intensity; to: 1; dir: alternate; dur: 2000; loop: true">
						</a-light>
					</a-entity>
				</a-entity>
			</a-box>

			<!-- Add walls around the player -->
			<a-box position="0 1.5 -5" rotation="0 0 0" width="10" height="3" depth="0.1" src="#wood-texture"></a-box>
			<a-box position="0 1.5 5" rotation="0 180 0" width="10" height="3" depth="0.1" src="#wood-texture"></a-box>
			<a-box position="-5 1.5 0" rotation="0 90 0" width="10" height="3" depth="0.1" src="#wood-texture"></a-box>
			<a-box position="5 1.5 0" rotation="0 -90 0" width="10" height="3" depth="0.1" src="#wood-texture"></a-box>

			<!-- add ground -->
			<a-box position="0 0 0" rotation="-90 0 0" width="10" height="10" depth="0.1" src="#wood-texture"></a-box>

			<!-- add ceiling -->
			<a-box position="0 3 0" rotation="90 0 0" width="10" height="10" depth="0.1" src="#wood-texture"></a-box>

			<!-- <TheMainRoom /> -->
		</template>

		<TheCameraRig />
	</a-scene>
</template>
