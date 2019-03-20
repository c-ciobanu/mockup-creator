import {shallowMount} from "@vue/test-utils";
import Button from "@/components/Button";

describe("Button.vue", () => {
	it("type is button by default", () => {
		const wrapper = shallowMount(Button);

		expect(wrapper.attributes("type")).toMatch("button");
	});

	it("validates props.type correctly", () => {
		const wrapper = shallowMount(Button);
		const typeProp = wrapper.vm.$options.props.type;

		expect(typeProp.validator("example")).toBeFalsy();
		expect(typeProp.validator("button")).toBeTruthy();
	});

	it("renders props.text when passed", () => {
		const text = "submit";
		const wrapper = shallowMount(Button, {
			propsData: {text}
		});

		expect(wrapper.text()).toMatch(text);
	});

	it("renders slot when passed", () => {
		const text = "submit";
		const wrapper = shallowMount(Button, {
			slots: {default: text}
		});

		expect(wrapper.text()).toMatch(text);
	});

	it("emits event on click", () => {
		const wrapper = shallowMount(Button);

		wrapper.trigger("click");

		expect(wrapper.emitted("click")).toBeTruthy();
	});

	it("disables when props.disabled is passed", () => {
		const wrapper = shallowMount(Button, {
			propsData: {disabled: true}
		});

		wrapper.trigger("click");

		expect(wrapper.attributes("disabled")).toBeTruthy();
		expect(wrapper.emitted("click")).toBeFalsy();
	});
});
