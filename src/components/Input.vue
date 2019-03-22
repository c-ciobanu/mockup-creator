<template>
	<div class="input">
		<label>{{ label }}</label>
		<input
			:type="type"
			:name="name"
			:value="defaultValue"
			:required="required"
			:disabled="disabled"
			@blur="$emit(`blur`, $event.target.value)"
			@input="$emit(`change`, $event.target.value)"
		/>
	</div>
</template>

<script>
export default {
	name: "Input",
	props: {
		type: {
			type: String,
			default: "text",
			validator: (value) => ["email", "file", "number", "password", "tel", "text"].indexOf(value) !== -1
		},
		label: String,
		name: String,
		defaultValue: String,
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
