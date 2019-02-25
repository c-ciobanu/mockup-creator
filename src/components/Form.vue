<template>
	<form class="form" @submit.prevent="onSubmit">
		<template v-for="(field, index) in fields">
			<Input
				v-if="field.type === `input`"
				:key="index"
				:label="field.label"
				:name="field.name"
				:type="field.inputType"
				:required="field.required"
				:disabled="field.disabled"
				:onChange="(e) => callBack(field.name, e.target.value)"
			/>

			<Select
				v-if="field.type === `select`"
				:key="index"
				:label="field.label"
				:name="field.name"
				:required="field.required"
				:disabled="field.disabled"
				:options="field.options"
				:onItemClick="(val) => callBack(field.name, val)"
			/>
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
		onSubmit: {
			type: Function,
			required: true
		},
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

<style lang="scss" scoped></style>
