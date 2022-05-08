import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import IconComponent from '.';

export default {
  title: 'Icon',
  component: IconComponent,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args) => <IconComponent {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  as: 'FiArrowDownCircle'
}
