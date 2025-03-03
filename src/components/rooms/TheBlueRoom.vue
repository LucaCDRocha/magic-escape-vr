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

	const emit = defineEmits(["levelUp"]);

	setTimeout(() => {
		isSuccess.value = true;
	}, 1000);
</script>

<template>
	<TheRoom
		:y="y"
		:lightColor="lightColor"
		:roomColor="roomColor"
		:lvlUpColor="lvlUpColor"
		:isSuccess="isSuccess"
		@levelUp="$emit('levelUp')" />

	<a-text :position="`-1.73 ${y + 1} 1.76`" rotation="-90 123 0" align="center" color="orange" value="f a d e" />
</template>
