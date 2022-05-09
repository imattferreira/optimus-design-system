import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FormComponent from '.';
import { Input } from '../Input/Input.stories';

export default {
  title: 'Form',
  component: FormComponent,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof FormComponent>;

const Template: ComponentStory<typeof FormComponent> = (args) => <FormComponent {...args} />;

export const Form = Template.bind({});
Form.args = {
  children: (
    <>
      <Input label="Name" />
      <Input label="Email" />
    </>
  ),
  borderWidth: 'sm',
  borderColor: 'red600',
  spacing: '4',
  onSubmit: () => null,
}
