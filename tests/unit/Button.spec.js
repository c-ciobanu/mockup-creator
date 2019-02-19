import {shallowMount} from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
	it("renders props.text when passed", () => {
		const text = "submit";
		const wrapper = shallowMount(Button, {
			propsData: {text}
		});
		expect(wrapper.text()).toMatch(text);
	});
});
