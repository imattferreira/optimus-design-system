import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextComponent from '.';

export default {
  title: 'Text',
  component: TextComponent,
  argTypes: {},
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (args) => <TextComponent {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Hello World!',
}
