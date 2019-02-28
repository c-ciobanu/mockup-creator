<template>
	<div class="input">
		<label>{{ label }}</label>
		<input
			:type="type"
			:name="name"
			:required="required"
			:disabled="disabled"
			@blur="$emit(`blur`)"
			@input="$emit(`change`)"
		/>
	</div>
</template>

<script>
export default {
	name: "Input",
	props: {
		type: {
			type: String,
			default: "text"
		},
		name: String,
		label: String,
		required: Boolean,
		disabled: Boolean
	}
};
</script>

<style lang="scss" scoped>
.input {
	label {
		display: block;
		margin-bottom: 3px;
		font-size: 1.4rem;
		color: rgba(#000000, 0.6);
	}

	input {
		@extend %input;
	}
}
</style>
