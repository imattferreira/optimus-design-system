import type { Meta, StoryObj } from '@storybook/react';
import Toast from './toast';
import { noop } from '~/utils/function';

const meta = {
  title: 'Overlay/Toast',
  component: Toast,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onClose: noop,
    title: 'Toast',
    message: 'Hello World!',
  }
} satisfies Meta<typeof Toast>;

type Story = StoryObj<typeof meta>;

export const Message: Story = {
  args: {
    type: 'message'
  }
}

export const Error: Story = {
  args: {
    type: 'error'
  }
}

export const Success: Story = {
  args: {
    type: 'success'
  }
}

export const Warning: Story = {
  args: {
    type: 'warning'
  }
}

export default meta;
