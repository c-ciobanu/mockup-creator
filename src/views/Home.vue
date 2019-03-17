<template>
	<div class="home">
		<main>
			<component
				v-for="(component, index) in addedComponents"
				:key="index"
				:is="component.name"
				v-bind="component.props"
			/>
		</main>

		<aside>
			<Select :options="[`Button`, `Select`, `Input`]" @change="(val) => (selectedComponent = val)" />

			<Form
				v-if="selectedComponent"
				:key="selectedComponent"
				@submit="newComponent"
				:fields="$options.componentsProps[selectedComponent]"
				:callBack="dataHandler"
			/>
		</aside>
	</div>
</template>

<script>
import Button from "@/components/Button";
import Select from "@/components/Select";
import Input from "@/components/Input";
import Form from "@/components/Form";

import componentsJSON from "@/config/components.json";

import {mapState} from "vuex";

export default {
	name: "Home",
	components: {
		Button,
		Select,
		Input,
		Form
	},
	data: function() {
		return {
			selectedComponent: undefined,
			propsToSend: {}
		};
	},
	computed: mapState({
		addedComponents: (state) => state.home.components
	}),
	methods: {
		newComponent: function() {
			this.$store.commit(`home/addComponent`, {name: this.selectedComponent, props: this.propsToSend});
			this.selectedComponent = undefined;
			this.propsToSend = {};
		},
		dataHandler: function(key, val) {
			this.propsToSend[key] = val;
		}
	},
	componentsProps: componentsJSON
};
</script>

<style lang="scss" scoped>
main {
	width: 80%;
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
