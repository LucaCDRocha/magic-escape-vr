<script setup>
	import BaseRoom from "./BaseRoom.vue";
	import CeilLantern from "../objects/CeilLantern.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const y = 40;
</script>

<template>
	<BaseRoom :position="[0, y, 0]" :size="4" />
	<!-- Add a ceiling light -->
	<CeilLantern :position="`0 ${y + 2.15} 0`" :color="lightColor" />
	<!-- Add a congratulatory message -->
	<a-text value="Congratulations!" :position="`0 ${y + 2} -1.95`" color="white" align="center"></a-text>
</template>
