<template>
	<div class="home">
		<main>
			<p>wip</p>
		</main>
		<aside>
			<div class="component-selection">
				<Select :options="[`component`, `component`, `component`]" />
				<Button><i /></Button>
			</div>
		</aside>
	</div>
</template>

<script>
import Select from "@/components/Select.vue";
import Button from "@/components/Button.vue";

export default {
	name: "Home",
	components: {
		Select,
		Button
	}
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

	.component-selection {
		display: flex;

		.select {
			width: calc(75% - 10px);
			margin-right: 10px;
		}

		.button {
			width: 25%;

			i {
				@include icon($icon-plus);
			}
		}
	}
}
</style>
