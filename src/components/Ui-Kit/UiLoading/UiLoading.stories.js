import UiLoading from "./UiLoading";

export default {
	title: "Ui-Kit/UiLoading",
	component: UiLoading,
};

// Создаём компонент, который принимает args пропсы
const Template = (args) => <UiLoading {...args} />;

// Нужно будет передавать все пропсы, для удобства можно сгруппировать
const props = {
	theme: "black",
	isShadow: false,
	classes,
};

export const White = Template.bind({});
Light.args = {
	...props,
	theme: "white",
    isShadow: true,
};

export const Black = Template.bind({});
Dark.args = {
	...props,
	theme: "black",
};

export const Blue = Template.bind({});
Disabled.args = {
	...props,
	theme: "blue",
};
