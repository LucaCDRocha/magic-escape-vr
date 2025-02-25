<script setup>

const props = defineProps({
  position: { type: String, default: '0 0 0' },
  color: { type: String, default: 'white' },
  rotation: { type: String, default: '0 0 0' }
})

</script>

<template>
	<!-- Add a candle lantern -->
	<a-entity gltf-model="#candle-lantern" :position="position" scale="0.004 0.004 0.004" :rotation="rotation">
		<a-cylinder position="0 25 0" color="#3C1518" height="50" radius="10"></a-cylinder>
		<a-entity position="0 50 0">
			<a-sphere radius="9.6" :color="color" shader="flat"></a-sphere>
			<a-light
				type="point"
				:color="color"
				intensity="0.5"
				distance="5"
				animation="property: intensity; to: 1; dir: alternate; dur: 3000; loop: true"></a-light>
		</a-entity>
	</a-entity>
</template>
