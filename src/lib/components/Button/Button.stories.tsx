import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ButtonComponent from '.';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: 'Button',
}

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button'
}

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button'
}

export const Confirm = Template.bind({});
Confirm.args = {
  variant: 'confirm',
  children: 'Confirm Button'
}

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  children: 'Disabled Button'
}

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Warning Button'
}
