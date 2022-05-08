import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LinkComponent from '.';

export default {
  title: 'Link',
  component: LinkComponent,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof LinkComponent>;

const Template: ComponentStory<typeof LinkComponent> = (args) => <LinkComponent {...args} />;

export const Link = Template.bind({});
Link.args = {
  children: 'Navigate with Link',
  href: '#'
}
