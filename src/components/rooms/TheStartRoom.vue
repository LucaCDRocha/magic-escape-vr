<script setup>
    import CeilLantern from '../objects/CeilLantern.vue';

    const props = defineProps({
        lightColor: { type: String, default: 'white' },
    });
</script>

<template>
    <!-- Add a ceiling light -->
    <CeilLantern position="0 2.15 0" :color="lightColor" />

	<!-- Add walls around the player -->
	<a-box position="0 1.4 -2" rotation="0 0 0" width="4" height="2.8" depth="0.1" src="#wood-texture"></a-box>
	<a-box position="0 1.4 2" rotation="0 180 0" width="4" height="2.8" depth="0.1" src="#wood-texture"></a-box>
	<a-box position="-2 1.4 0" rotation="0 90 0" width="4" height="2.8" depth="0.1" src="#wood-texture"></a-box>
	<a-box position="2 1.4 0" rotation="0 -90 0" width="4" height="2.8" depth="0.1" src="#wood-texture"></a-box>

	<!-- add ground -->
	<a-box position="0 0 0" rotation="-90 0 0" width="4" height="4" depth="0.1" src="#wood-texture"></a-box>

	<!-- add ceiling -->
	<a-box position="0 2.8 0" rotation="90 0 0" width="4" height="4" depth="0.1" src="#wood-texture"></a-box>
</template>
