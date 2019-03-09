<template>
	<form class="form" @submit.prevent="$emit(`submit`)">
		<template v-for="field in fields">
			<Input
				v-if="field.type === `input`"
				:key="`form-input-${field.name}`"
				:label="field.label"
				:name="field.name"
				:type="field.inputType"
				:required="field.required"
				:disabled="field.disabled"
				@change="(value) => callBack(field.name, value)"
				:defaultValue="field.default"
			/>

			<Select
				v-else-if="field.type === `select`"
				:key="`form-select-${field.name}`"
				:label="field.label"
				:name="field.name"
				:required="field.required"
				:disabled="field.disabled"
				:options="field.options"
				@change="(val) => callBack(field.name, val)"
				:defaultValue="field.default"
			/>

			<Input v-else :key="`form-default-${field.name}`" label="undefined" disabled />
		</template>

		<Button type="submit">{{ submitButtonText }}</Button>
	</form>
</template>

<script>
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";

export default {
	name: "Form",
	components: {
		Input,
		Select,
		Button
	},
	props: {
		callBack: {
			type: Function,
			required: true
		},
		submitButtonText: {
			type: String,
			default: "submit"
		},
		fields: {
			type: Array,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.button {
	margin-top: 20px;
}
</style>
