import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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

export const Blocked = Template.bind({});
Blocked.args = {
  variant: 'blocked',
  children: 'Blocked Button'
}

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Warning Button'
}
