import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta = {
  title: 'Interactive/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    as: 'button',
    children: 'Hello World!',
    full: false,
    size: 'size1',
  },
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', width: '90vw' }}>
      <Button {...args} />
    </div>)
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const PrimaryFilled: Story = {
  args: {
    type: 'primary',
    shape: 'filled'
  }
}

export const PrimaryOutline: Story = {
  args: {
    type: 'primary',
    shape: 'outline'
  }
}

export const PrimaryGhost: Story = {
  args: {
    type: 'primary',
    shape: 'ghost'
  }
}

export const SecondaryFilled: Story = {
  args: {
    type: 'secondary',
    shape: 'filled'
  }
}

export const SecondaryOutline: Story = {
  args: {
    type: 'secondary',
    shape: 'outline'
  }
}

export const SecondaryGhost: Story = {
  args: {
    type: 'secondary',
    shape: 'ghost'
  }
}

export const SuccessFilled: Story = {
  args: {
    type: 'success',
    shape: 'filled'
  }
}

export const SuccessOutline: Story = {
  args: {
    type: 'success',
    shape: 'outline'
  }
}

export const SuccessGhost: Story = {
  args: {
    type: 'success',
    shape: 'ghost'
  }
}

export const ErrorFilled: Story = {
  args: {
    type: 'error',
    shape: 'filled'
  }
}

export const ErrorOutline: Story = {
  args: {
    type: 'error',
    shape: 'outline'
  }
}

export const ErrorGhost: Story = {
  args: {
    type: 'error',
    shape: 'ghost'
  }
}

export default meta;
