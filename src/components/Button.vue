<template>
	<button :type="type" :disabled="disabled" v-on="onClick ? {click: onClick} : {}">{{ text }}</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		type: {
			type: String,
			default: "button"
		},
		text: {
			type: String,
			required: true
		},
		disabled: Boolean,
		onClick: Function
	}
};
</script>

<style lang="scss" scoped>
.v-button {
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
