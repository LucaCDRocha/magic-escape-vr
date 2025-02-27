<script setup>
	import { ref } from "vue";

	import BaseRoom from "./BaseRoom.vue";
	import BookShelf from "../objects/BookShelf.vue";
	import CandleLantern from "../objects/CandleLantern.vue";
	import CeilLantern from "../objects/CeilLantern.vue";
	import Candle from "../objects/Candle.vue";

	const candlesPositions = ref([
		[0, 0.1, -0.4],
		[1, 0.1, -0.4],
		[-1, 0.1, -0.4],
	]);

	const props = defineProps({
		lightColor: { type: String, default: "white" },
		y: { type: Number, default: 0 },
		roomColor: { type: String, default: "white" },
	});

	console.log(props.roomColor);

	const emits = defineEmits(["lightUp"]);
</script>

<template>
	<BaseRoom :position="[0, y, 0]" :size="6" :lightColor="lightColor" />
	<!-- Add a ceiling light -->
	<CeilLantern :position="`0 ${y + 2.15} 0`" :color="lightColor" />
	<!-- Add a candle lantern -->
	<CandleLantern :position="`-2.5 ${y + 0.04} -2.5`" :color="lightColor" />
	<!-- Add a book shelf -->
	<BookShelf :position="`2 ${y} -2.8`" rotation="0 180 0" />

	<!-- Add a candle -->
	<template v-if="roomColor === 'green'">
		<Candle
			v-for="(position, index) in candlesPositions"
			:key="index"
			:classToLightUp="'candle-' + index"
			:position="`${position[0]} ${position[1] + y} ${position[2]}`"
			rotation="0 180 0"
			:color="lightColor"
			:canLightUp="true"
			@lightUp="$emit('lightUp')" />
	</template>
	<template v-else>
		<Candle
			v-for="(position, index) in candlesPositions"
			:key="index"
			:class="'candle-' + index"
			:position="`${position[0]} ${position[1] + y} ${position[2]}`"
			rotation="0 180 0"
			:color="lightColor" />
	</template>
</template>
