<template>
	<div class="options">
		<label v-if="label">{{ label }}</label>
		<div class="input">
			<input
				type="text"
				:name="name"
				:required="required"
				:disabled="disabled"
				v-model="element"
				@keyup.enter="addElement"
			/>
			<div @click="addElement"><i /></div>
		</div>

		<ul v-if="options.length">
			<li v-for="option in options" :key="option">
				<span>{{ option }}</span>
				<i @click="removeElement(option)" />
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Options",
	props: {
		label: String,
		name: String,
		defaultValue: String,
		required: Boolean,
		disabled: Boolean
	},
	data: function() {
		return {
			element: "",
			options: this.defaultValue ? this.defaultValue : []
		};
	},
	methods: {
		addElement() {
			let elToAdd = this.element.trim().toLowerCase();

			if (elToAdd !== "" && !this.options.includes(elToAdd)) {
				this.options.push(elToAdd);
				this.element = "";
				this.$emit("change", this.options);
			}
		},
		removeElement(el) {
			this.options = this.options.filter((option) => option !== el);
			this.$emit("change", this.options);
		}
	}
};
</script>

<style lang="scss" scoped>
.options {
	label {
		display: block;
		margin-bottom: 3px;
		font-size: 1.4rem;
		color: rgba(#000000, 0.6);
	}

	.input {
		display: flex;
		border: 1px solid rgba(#000, 0.12);
		border-radius: 3px;
		color: rgba(#000, 0.87);
		position: relative;

		input {
			@extend %input;
			border: none;

			&:focus + div {
				background-color: rgb(82, 148, 226);
			}
		}

		div {
			position: absolute;
			@extend %flex-center;
			width: 40px;
			height: 100%;
			right: 0;
			background-color: rgba(#000, 0.12);
			cursor: pointer;

			i {
				@include icon($icon-plus);
				color: #fff;
			}
		}
	}

	ul {
		margin-top: 5px;
		width: 100%;
		border: 1px solid rgba(#000, 0.12);
		border-radius: 3px;

		li {
			padding: 5px 10px;
			background-color: #fff;
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid rgba(#000, 0.12);

			&:last-child {
				border-bottom: none;
			}

			&:hover {
				background-color: #f5f5f5;

				i {
					display: block;
				}
			}

			i {
				@include icon($icon-trash);
				font-size: 1.2rem;
				display: none;

				&:hover {
					color: $color-danger;
				}
			}
		}
	}
}
</style>
