import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import StackComponent from ".";
import Text from "../Text";

export default {
  title: 'Stack',
  component: StackComponent,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof StackComponent>;

const Template: ComponentStory<typeof StackComponent> = (args) => <StackComponent {...args} />

export const Stack = Template.bind({});
Stack.args = {
  children: (
    <>
      <Text>Hello World</Text>
      <Text>How are you?</Text>
    </>
  ),
  p: '4',
}
