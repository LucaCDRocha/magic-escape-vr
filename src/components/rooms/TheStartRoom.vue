<script setup>
	import BaseRoom from "./BaseRoom.vue";
	import CeilLantern from "../objects/CeilLantern.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const y = 0;
</script>

<template>
	<BaseRoom :position="[0, y, 0]" :size="4" />
	<!-- Add a ceiling light -->
	<CeilLantern :position="`0 ${y + 2.15} 0`" :color="lightColor" />
	<!-- Add a welcome message -->
	<a-text value="Welcome!" :position="`0 ${y + 2} -1.95`" color="white" align="center"></a-text>
	<a-text
		value="Can you escape the room ?"
		width="3.8"
		:position="`0 ${y + 1.8} -1.95`"
		color="white"
		align="center"></a-text>
	<a-text
		value="You can interact with some objects with the tip of the wand in vr or by clicking on them on pc"
		width="3.8"
		:position="`0 ${y + 1.4} -1.95`"
		color="white"
		align="center"></a-text>
	<a-text
		value="Take the wand to start"
		width="3.8"
		:position="`0 ${y + 1} -1.95`"
		color="white"
		align="center"></a-text>
</template>
