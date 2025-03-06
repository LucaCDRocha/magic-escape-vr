<script setup>
	import BaseRoom from "./BaseRoom.vue";
	import CeilLantern from "../objects/CeilLantern.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const y = 40;

	function reloadView() {
		window.location.reload();
	}

	function exitImmersiveView() {
		if (document.querySelector("a-scene").is("vr-mode")) {
			document.querySelector("a-scene").exitVR();
			console.info("Exit VR mode… bye!");
		}
	}
</script>

<template>
	<BaseRoom :position="[0, y, 0]" :size="4" />
	<!-- Add a ceiling light -->
	<CeilLantern :position="`0 ${y + 2.15} 0`" :color="lightColor" />
	<!-- Add a congratulatory message -->
	<a-text value="Congratulations!" :position="`0 ${y + 2} -1.95`" color="white" align="center"></a-text>

	<a-box
		:position="`-1 ${y + 1} -2`"
		width="1"
		height="0.3"
		depth="0.11"
		color="white"
		obb-collider
		clickable
		@obbcollisionstarted="reloadView()"
		@click="reloadView()">
		<a-text value="Restart" color="black" align="center" position="0 0 0.055"></a-text>
	</a-box>

	<a-box
		:position="`1 ${y + 1} -2`"
		width="1"
		height="0.3"
		depth="0.11"
		color="white"
		obb-collider
		clickable
		@obbcollisionstarted="exitImmersiveView()"
		@click="exitImmersiveView()">
		<a-text value="Quit VR" color="black" align="center" position="0 0 0.055"></a-text>
	</a-box>
</template>
