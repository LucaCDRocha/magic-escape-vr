<script setup>
	const props = defineProps({
		position: { type: Array, required: true },
		size: { type: Number, required: true },
		lightColor: { type: String, default: "white" },
	});
</script>

<template>
	<!-- Add walls around the player -->
	<a-box :position="`${position[0]} ${position[1] + 1.4} ${position[2] - size/2}`" rotation="0 0 0" :width="size" height="2.8" depth="0.1" src="#wood-texture"></a-box>
	<a-box :position="`${position[0]} ${position[1] + 1.4} ${position[2] + size/2}`" rotation="0 180 0" :width="size" height="2.8" depth="0.1" src="#wood-texture"></a-box>
	<a-box :position="`${position[0] - size/2} ${position[1] + 1.4} ${position[2]}`" rotation="0 90 0" :width="size" height="2.8" depth="0.1" src="#wood-texture"></a-box>
	<a-box :position="`${position[0] + size/2} ${position[1] + 1.4} ${position[2]}`" rotation="0 -90 0" :width="size" height="2.8" depth="0.1" src="#wood-texture"></a-box>

	<!-- add ground -->
	<a-box :position="`${position[0]} ${position[1]} ${position[2]}`" rotation="-90 0 0" :width="size" :height="size" depth="0.1" src="#wood-texture"></a-box>

	<!-- add ceiling -->
	<a-box :position="`${position[0]} ${position[1] + 2.8} ${position[2]}`" rotation="90 0 0" :width="size" :height="size" depth="0.1" src="#wood-texture"></a-box>
</template>
