<script setup>
	import { ref } from "vue";

	defineProps({
		loaded: Boolean,
	});

	const showOnboarding = ref(true);

	function enterScene() {
		showOnboarding.value = false;
		if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
			document.querySelector("a-scene").enterVR();
		}
		document.querySelector("a-scene").emit("enter-scene");
	}
</script>

<template>
	<div id="onboarding" v-if="showOnboarding">
		<div>
			<h1>A-Frame + Vite + Vue Boilerplate</h1>
			<p v-if="!loaded">loading...</p>
			<button v-if="loaded" @click="enterScene()">Enter scene</button>
			<div class="licences">
				<section>
					<h4>Movement modes support</h4>
					<ul>
						<li>Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look control (Drag and drop)</li>
						<li>
							Mobile – 1x Finger touch to go forward + 2x Fingers touch to go backward + Gaze cursor for click
						</li>
						<li>VR/AR – walk + Teleport (Grip for grab and laser for click) + Gaze cursor for click</li>
					</ul>
				</section>
				<section>
					<h4>Source code</h4>
					<blockquote><a href="https://github.com/LucaCDRocha/magic-escape-vr">Github repo</a></blockquote>
				</section>
				<dl>
					<dt>
						<i>Included</i>
					</dt>
					<dt>
						<a href="https://github.com/c-frame/aframe-extras" target="_blank"
							>aframe-extras controls and animation-mixer</a
						>
					</dt>
					<dd>
						<a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
					</dd>

					<dt>
						<a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
					</dt>
					<dd>
						<a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
					</dd>

					<dt>
						<a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
					</dt>
					<dd>
						<a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank"
							>MIT License</a
						>
					</dd>

					<dt>
						<a href="https://github.com/diarmidmackenzie/aframe-multi-camera/" target="_blank"
							>aframe-multi-camera</a
						>
					</dt>
					<dd>
						<a href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE" target="_blank"
							>MIT License</a
						>
					</dd>

					<dt>
						<a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank"
							>simple-navmesh-constraint</a
						>
					</dt>
					<dd>By Ada Rose Cannon under MIT License</dd>
				</dl>
				<dl>
					<dt>
						<a href="https://sketchfab.com/3d-models/black-cat-4e001843d9774d7eb5e48d59f2bf14f5" target="_blank"
							>Black Cat</a
						>
					</dt>
					<dd>
						by Kinga Kroliczek under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a href="https://sketchfab.com/3d-models/book-open-bcc69dacd1bc4eadaf4b9fc0d6e2430b" target="_blank"
							>Open Book</a
						>
					</dt>
					<dd>
						by FlukierJupiter under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a href="https://sketchfab.com/3d-models/book-shelf-eb8f9728cd9347f4b67adaaf4db1abca" target="_blank"
							>Book Shelf</a
						>
					</dt>
					<dd>
						by Darren McNerney 3D under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/candle-lantern-dd0a255416fa47ddb9e5c179d86ef437"
							target="_blank"
							>Candle Lantern</a
						>
					</dt>
					<dd>
						by Laetitia Irata under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/kids-xylophone-b9c057311d0c44eab7a4556eccdba708"
							target="_blank"
							>Kids Xylophone</a
						>
					</dt>
					<dd>
						by pamruta under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a href="https://sketchfab.com/3d-models/lantern-8031e8417b1446fcb2d944709a8e80a7" target="_blank"
							>Lantern</a
						>
					</dt>
					<dd>
						by Ayouloo under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/lowpoly-candle-c5b1ca5b8492426199932f6b1a64a4d9"
							target="_blank"
							>Lowpoly Candle</a
						>
					</dt>
					<dd>
						by matoteus under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a href="https://sketchfab.com/3d-models/magic-wand-53220e5960e2499ca08c379cd601b62d" target="_blank"
							>Magic Wand</a
						>
					</dt>
					<dd>
						by BozhidarKN under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/portal-frame-da34b37a224e4e49b307c0b17a50af2c"
							target="_blank"
							>Portal Frame</a
						>
					</dt>
					<dd>
						by soidev under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a href="https://sketchfab.com/3d-models/table-1132fa2850a24917892733566bd68e74" target="_blank"
							>Table</a
						>
					</dt>
					<dd>
						by yryabchenko under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/wizard-table-f41572634ed049b68a9a1afebebdabd4"
							target="_blank"
							>Wizard Table</a
						>
					</dt>
					<dd>
						by Peter Nox under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/table-and-chairs-3d89401bfcdc482c990d2b9536dc3c6d"
							target="_blank"
							>Table and Chairs</a
						>
					</dt>
					<dd>
						by Graham under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a
							href="https://sketchfab.com/3d-models/mahogany-table-e9ef3eadee9d4491b7c59fdbb19c30cd"
							target="_blank"
							>Mahogany Table</a
						>
					</dt>
					<dd>
						by myndman under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
						via <a href="https://sketchfab.com/feed" target="_blank">Sketchfab</a>
					</dd>

					<dt>
						<a
							href="https://www.freepik.com/free-vector/abstract-circular-geometric-background-starburst-dynamic-centric-motion-pattern_34430936.htm"
							target="_blank"
							>Portal Texture</a
						>
					</dt>
					<dd>
						by flatart under
						<a href="https://www.freepik.com/legal/terms-of-use#nav-freepik-license" target="_blank"
							>Freepik License</a
						>
						via <a href="https://www.freepik.com" target="_blank">Freepik</a>
					</dd>

					<dt>
						<a href="https://www.freepik.com/free-photo/wooden-background_5857148.htm" target="_blank"
							>Wooden Background</a
						>
					</dt>
					<dd>
						by denamorado under
						<a href="https://www.freepik.com/legal/terms-of-use#nav-freepik-license" target="_blank"
							>Freepik License</a
						>
						via <a href="https://www.freepik.com" target="_blank">Freepik</a>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<style scoped>
	h1 {
		font-size: 1.5rem;
	}
	a {
		color: #eee;
		text-decoration: none;
	}
	.licences {
		margin: 2rem 0;
		padding-bottom: 1rem;
		font-size: 1rem;
		text-align: left;
	}
	.licences dt {
		padding-top: 0.75rem;
		font-size: 0.9rem;
		font-weight: bold;
	}
	.licences dd {
		margin-left: 0;
		font-size: 0.8rem;
	}

	#onboarding {
		position: absolute;
		top: 0;
		left: 0;
		background-color: #333;
		color: #ccc;
		width: 100vw;
		height: 100vh;
		padding: 1rem;
		font-family: monospace;
		z-index: 10000;
		overflow: auto;
	}
	#onboarding > * {
		margin: 0 auto;
		max-width: 50rem;
		width: calc(100vw - 10rem);
		text-align: center;
		border-radius: 0.3rem;
		padding: 1rem;
		font-size: 1.3rem;
	}
	#onboarding button {
		font-size: 1.3rem;
		padding: 0.5rem 1rem;
		border-radius: 0.3rem;
		background-color: white;
		color: black;
		border: none;
		cursor: pointer;
	}
</style>
#onboarding li { #onboarding li { font-size: 1rem; text-align: left; }
