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

	const mots = {
		1: "books",
		2: "cat",
		3: "candle",
		4: "candle lantern",
		5: "ceil lantern",
		6: "skull",
		7: "book shelf",
		8: "spider",
		9: "portal",
	};
	const mot = ref("cat");
	const rightSequence = [1, 7, 2];
	const currentSequence = ref([]);

	const emit = defineEmits(["levelUp"]);

	const handleNumClick = (num) => {
		currentSequence.value.push(num);
		mot.value = mots[num];

		if (currentSequence.value.length > rightSequence.length) {
			currentSequence.value.shift();
		}

		if (currentSequence.value.join("") === rightSequence.join("")) {
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
		:value="isSuccess ? 'You found it!' : `How many ${mot}?`"
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

	<a-text :position="`-1.73 ${y + 1} 1.76`" rotation="-90 123 0" align="center" color="orange" value="f a d e" />
</template>
