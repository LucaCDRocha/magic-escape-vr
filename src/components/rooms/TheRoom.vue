<script setup>
	import { ref, watch, onMounted } from "vue";

	import BaseRoom from "./BaseRoom.vue";

	import BookOpen from "../objects/BookOpen.vue";
	import BookShelf from "../objects/BookShelf.vue";
	import Candle from "../objects/Candle.vue";
	import CandleLantern from "../objects/CandleLantern.vue";
	import CeilLantern from "../objects/CeilLantern.vue";
	import ExitPortal from "../objects/ExitPortal.vue";
	import RoundTable from "../objects/RoundTable.vue";
	import WizardTable from "../objects/WizardTable.vue";
	import BlackCat from "../objects/BlackCat.vue";

	import "../../aframe/clickable.js";

	const props = defineProps({
		lightColor: { type: String, default: "black" },
		y: { type: Number, default: 0 },
		roomColor: { type: String, default: "black" },
		lvlUpColor: { type: String, default: "black" },
		isSuccess: { type: Boolean, default: false },
	});

	const emit = defineEmits(["lightUp", "levelUp"]);

	const candlesPositions = ref([
		[2.1, 1, 0.6],
		[-1.5, 1.01, -2.75],
		[2.5, 1.37, -2.75],
		[-2.2, 1, 1.7],
	]);
	const levelUpElement = ref(null);

	const levelUp = () => {
		console.log("Level up!");
		levelUpElement.value.setAttribute(
			"animation",
			`property: position; to: 0 ${props.y + 3} 0; dir: alternate; dur: 100; loop: false`
		);
		setTimeout(() => {
			levelUpElement.value.setAttribute("visible", false);
		}, 100);
		emit("levelUp");
	};

	watch(
		() => props.isSuccess,
		(newVal) => {
			if (newVal) {
				levelUpElement.value.setAttribute(
					"animation",
					`property: position; to: 0 ${props.y + 1.5} 0; dir: alternate; dur: 5000; loop: false`
				);
				levelUpElement.value.setAttribute("visible", true);
			}
		}
	);

	onMounted(() => {
		levelUpElement.value = document.getElementById(`level-up-${props.roomColor}`);
	});
</script>

<template>
	<a-entity v-if="lvlUpColor !== 'black'" :id="`level-up-${roomColor}`" :position="`0 ${y + 3} 0`" visible="false">
		<a-sphere
			radius="0.05"
			:color="lvlUpColor"
			shader="flat"
			clickable
			:emit-when-near="`target: #sphere-wand; distance: 0.05`"
			@click="levelUp()"></a-sphere>
		<a-light type="point" radius="0.05" :color="lvlUpColor" intensity="1"> </a-light>
	</a-entity>

	<BaseRoom :position="[0, y, 0]" :size="6" />
	<!-- Add a ceiling light -->
	<CeilLantern :position="`0 ${y + 2.15} 0`" :color="lightColor" :visible="lightColor === roomColor" />
	<!-- Add a candle lantern -->
	<CandleLantern :position="`2.5 ${y + 0.04} 2.5`" :color="lightColor" :visible="lightColor === roomColor" />
	<!-- Add a book shelf -->
	<BookShelf :position="`2 ${y} -2.8`" rotation="0 180 0" />
	<BookShelf :position="`-2 ${y} -2.8`" rotation="0 180 0" />
	<!-- Add a wizard table -->
	<WizardTable :position="`2.4 ${y} 0`" rotation="0 90 0" />
	<!-- add a round table -->
	<RoundTable :position="`-2 ${y} 2`" />
	<!-- add a book open -->
	<BookOpen :position="`-2.1 ${y + 0.99} 2.3`" rotation="0 -135 0" />
	<!-- add a black cat -->
	<BlackCat :position="`-2.5 ${y} 0`" />

	<!-- Add an exit portal -->
	<ExitPortal :position="`0 ${y} -2.75`" :open="roomColor === 'white' ? true : false" />

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
			@lightUp="$emit('lightUp')"
			:visible="lightColor === roomColor" />
	</template>
	<template v-else>
		<Candle
			v-for="(position, index) in candlesPositions"
			:key="index"
			:class="'candle-' + index"
			:position="`${position[0]} ${position[1] + y} ${position[2]}`"
			rotation="0 180 0"
			:color="lightColor"
			:visible="lightColor === roomColor" />
	</template>
</template>
