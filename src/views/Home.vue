<template>
	<div class="home">
		<main>
			<p>wip</p>
		</main>

		<aside>
			<Select :options="[`Button`, `Select`, `Input`]" :onItemClick="(val) => (selectedComponent = val)" />

			<Form
				v-if="selectedComponent"
				:onSubmit="() => {}"
				:fields="$options.componentsProps[selectedComponent]"
				:callBack="() => {}"
			/>
		</aside>
	</div>
</template>

<script>
import Select from "@/components/Select.vue";
import Form from "@/components/Form.vue";
import componentsJSON from "@/config/components.json";

export default {
	name: "Home",
	components: {
		Select,
		Form
	},
	data: function() {
		return {
			selectedComponent: undefined
		};
	},
	componentsProps: componentsJSON
};
</script>

<style lang="scss" scoped>
main {
	width: 100%;
	margin-right: 20%;
	padding: 20px 5%;
}

aside {
	position: fixed;
	top: 0;
	right: 0;
	width: 20%;
	height: 100vh;
	padding: 20px;
	background-color: #ebf2ea;
	border-left: 3px solid #d4dca9;

	.form {
		margin-top: 20px;
		padding: 10px;
		border: 2px solid #fff;
	}
}
</style>
