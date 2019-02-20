<template>
	<button :type="type" class="button" :disabled="disabled" @click="onClick">{{ text }}</button>
</template>

<script>
import {noop} from "lodash";

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
		onClick: {
			type: Function,
			default: noop
		}
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
