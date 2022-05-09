import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import InputComponent from '.';

export default {
  title: 'Input',
  component: InputComponent,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});
Input.args = { };

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
  placeholder: 'Your complete name'
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  label: 'Your complete name'
};

export const InputWithLeftIcon = Template.bind({});
InputWithLeftIcon.args = {
  iconLeft: 'FiAnchor'
};

export const InputWithRightIcon = Template.bind({});
InputWithRightIcon.args = {
  iconRight: 'FiAnchor'
};
