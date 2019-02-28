<template>
	<form class="form" @submit.prevent="$emit(`submit`)">
		<template v-for="(field, index) in fields">
			<Input
				v-if="field.type === `input`"
				:key="index"
				:label="field.label"
				:name="field.name"
				:type="field.inputType"
				:required="field.required"
				:disabled="field.disabled"
				@change="(e) => callBack(field.name, e.target.value)"
			/>

			<Select
				v-else-if="field.type === `select`"
				:key="index"
				:label="field.label"
				:name="field.name"
				:required="field.required"
				:disabled="field.disabled"
				:options="field.options"
				@change="(val) => callBack(field.name, val)"
			/>

			<Input v-else :key="index" label="undefined" disabled />
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
