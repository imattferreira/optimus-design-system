import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import BoxComponent from ".";
import Text from "../Text";

export default {
  title: 'Box',
  component: BoxComponent,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof BoxComponent>;

const Template: ComponentStory<typeof BoxComponent> = (args) => <BoxComponent {...args} />

export const Box = Template.bind({});
Box.args = {
  children: (
    <Text>Hello World</Text>
  ),
  p: '4',
}
