import {shallowMount} from "@vue/test-utils";
import Input from "@/components/Input";

describe("Input.vue", () => {
	it("type is text by default", () => {
		const wrapper = shallowMount(Input);
		const input = wrapper.find("input");

		expect(input.attributes("type")).toMatch("text");
	});

	it("validates props.type correctly", () => {
		const wrapper = shallowMount(Input);
		const typeProp = wrapper.vm.$options.props.type;

		expect(typeProp.validator("example")).toBeFalsy();
		expect(typeProp.validator("text")).toBeTruthy();
	});

	it("renders props.label when passed", () => {
		const labelText = "test";
		const wrapper = shallowMount(Input, {
			propsData: {label: labelText}
		});
		const labelNode = wrapper.find("label");

		expect(labelNode.text()).toMatch(labelText);
	});

	it("emits event on blur", () => {
		const wrapper = shallowMount(Input);
		const input = wrapper.find("input");

		input.trigger("blur");

		expect(wrapper.emitted("blur")).toBeTruthy();
	});

	it("emits event on change", () => {
		const wrapper = shallowMount(Input);
		const input = wrapper.find("input");

		input.element.value = 100;
		input.trigger("input");

		expect(wrapper.emitted("change")).toBeTruthy();
	});

	it("disables when props.disabled is passed", () => {
		const wrapper = shallowMount(Input, {
			propsData: {disabled: true}
		});
		const input = wrapper.find("input");

		expect(input.attributes("disabled")).toBeTruthy();
	});

	it("correctly sets value when props.defaultValue is passed", () => {
		const value = "test";
		const wrapper = shallowMount(Input, {
			propsData: {defaultValue: value}
		});
		const input = wrapper.find("input");

		expect(input.element.value).toMatch(value);
	});
});
