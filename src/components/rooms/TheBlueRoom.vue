<script setup>
	import { ref } from "vue";

	import TheRoom from "./TheRoom.vue";

	const props = defineProps({
		lightColor: { type: String, default: "white" },
	});

	const y = 8;
	const roomColor = "blue";
	const lvlUpColor = "green";
	const isSuccess = ref(false);

	const mot = ref(".....");

	const emit = defineEmits(["levelUp"]);

	const handleNumClick = (num) => {
		switch (num) {
			case 1:
				mot.value = "book shelf";
				break;
			case 2:
				mot.value = "cat";
				break;
			case 3:
				mot.value = "candle";
				break;
			case 4:
				mot.value = "candle lantern";
				break;
			case 5:
				mot.value = "ceil lantern";
				break;
			case 6:
				mot.value = "exit";
				break;
			case 7:
				mot.value = "books";
				break;
			case 8:
				mot.value = "spider";
				break;
			case 9:
				mot.value = "wand";
				break;
			default:
				break;
		}
	};

	const validate = () => {
		if (mot.value === "books") {
			isSuccess.value = true;
		}
	};
</script>

<template>
	<TheRoom
		:y="y"
		:lightColor="lightColor"
		:roomColor="roomColor"
		:lvlUpColor="lvlUpColor"
		:isSuccess="isSuccess"
		@levelUp="$emit('levelUp')" />

	<a-text
		:value="`How many ${mot}?`"
		:position="`0 ${y + 2} 2.95`"
		rotation="0 180 0"
		color="blue"
		align="center"></a-text>

	<a-entity :position="`0 ${y + 0.7} 2.94`" rotation="0 180 0">
		<a-plane
			v-for="(num, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
			:key="index"
			:position="`${(index % 3) * 0.4 - 0.4} ${Math.floor(index / 3) * 0.4} 0`"
			width="0.3"
			height="0.3"
			color="gray"
			obb-collider
			clickable
			@obbcollisionstarted="handleNumClick(num)"
			@click="handleNumClick(num)">
			<a-text :value="num" color="black" align="center" position="0 0 0"></a-text>
		</a-plane>
	</a-entity>

	<a-plane
		:position="`-0.8 ${y + 0.7} 2.94`"
		rotation="0 180 0"
		width="0.3"
		height="0.3"
		color="gray"
		obb-collider
		clickable
		@obbcollisionstarted="validate"
		@click="validate">
		<a-text value="OK" color="black" align="center" position="0 0 0"></a-text>
	</a-plane>

	<a-text :position="`-1.73 ${y + 1} 1.76`" rotation="-90 123 0" align="center" color="orange" value="f a d e" />
</template>
