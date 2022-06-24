import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FlexComponent from '.';
import Text from '../Text';

export default {
  title: 'Flex',
  component: FlexComponent,
  argsTypes: {},
  args: {},
} as ComponentMeta<typeof FlexComponent>;

const Template: ComponentStory<typeof FlexComponent> = (args) => <FlexComponent {...args} />

export const Flex = Template.bind({});
Flex.args = {
  children: (
    <Text>Hello World</Text>
  ),
  p: '4',
}
