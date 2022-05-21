import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ImageComponent from '.';

export default {
  title: 'Image',
  component: ImageComponent,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof ImageComponent>;

const Template: ComponentStory<typeof ImageComponent> = (args) => <ImageComponent {...args} />;

export const Image = Template.bind({});
Image.args = {
  src: 'https://picsum.photos/200'
}
