import UiButton from "./UiButton";

export default {
	title: "Ui-Kit/UiButton",
	component: UiButton,
};

// Создаём компонент, который принимает args пропсы
const Template = (args) => <UiButton {...args} />;

// Нужно будет передавать все пропсы, для удобства можно сгруппировать
const props = {
	text: "Hello",
	onClick: () => console.log("Button Click"),
	disabled: false,
	theme: "light",
	classes: "",
};

export const Light = Template.bind({});
Light.args = {
	...props,
	theme: "light",
};

export const Dark = Template.bind({});
Dark.args = {
	...props,
	theme: "dark",
};

export const Disabled = Template.bind({});
Disabled.args = {
	...props,
	disabled: true,
};
