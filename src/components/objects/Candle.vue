<script setup>
	import { ref } from "vue";

	const props = defineProps({
		position: { type: String, default: "0 0 0" },
		rotation: { type: String, default: "0 0 0" },
		color: { type: String, default: "white" },
		canLightUp: { type: Boolean, default: false },
		// lights to turn on
		classToLightUp: { type: String, default: "" },
	});

	const isLightUp = ref(false);
	const canLightUp = ref(props.canLightUp);

	const emit = defineEmits(["lightUp"]);

	const lightCandle = () => {
		canLightUp.value = true;
		isLightUp.value = true;
		if (props.classToLightUp) {
			emit("lightUp");
			lightUpDependent();
		}
	};

	const lightUpDependent = () => {
		document.querySelectorAll(`.${props.classToLightUp}`).forEach((el) => {
			el.emit("click");
		});
	};

	const uniqid = Math.random().toString(36).substring(7);
</script>

<template>
	<a-entity
		:id="`master-${uniqid}`"
		:clickable="canLightUp ? (isLightUp ? null : '') : null"
		gltf-model="#candle"
		:position="position"
		:rotation="rotation"
		scale="0.1 0.1 0.1">
		<a-entity
			position="0.01 2.01 0"
			:emit-when-near="
				canLightUp ? (isLightUp ? null : 'target: #sphere-wand; distance: 0.03; event: lightCandle') : null
			"
			:listen-to="`target: #master-${uniqid}; event: click; emit: lightCandle`"
			@lightCandle="lightCandle()"
			:visible="canLightUp ? isLightUp : false">
			<a-sphere radius="0.05" :color="color" shader="flat"></a-sphere>
			<a-light type="point" :color="color" intensity="0.5" distance="5"></a-light>
		</a-entity>
	</a-entity>
</template>
