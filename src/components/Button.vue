<template>
	<button :type="type" class="button" :disabled="disabled" @click="$emit(`click`)">
		<slot v-if="this.$slots.default" />
		<template v-else>{{ text }}</template>
	</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		type: {
			type: String,
			default: "button",
			validator: (value) => ["button", "submit", "reset"].indexOf(value) !== -1
		},
		text: String,
		disabled: Boolean
	}
};
</script>

<style lang="scss" scoped>
.button {
	text-transform: uppercase;
	background-color: #e5e5e5;
	width: 100%;
	height: 40px;
	border: 0;
	border-radius: 3px;
	background-color: #19d764;
	color: #fff;

	&:hover {
		background-color: #108940;
	}

	&:disabled {
		opacity: 0.5;
	}
}
</style>
