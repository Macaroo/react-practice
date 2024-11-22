import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TodoTable } from './index';


const meta = {
  title: 'Components/TodoTable',
  component: TodoTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    todoList: [
      {
        id: '12345',
        task: '掃除',
        person: '山田太郎',
        deadline: '2024-09-10',
      },
      {
        id: '4567',
        task: '洗濯',
        person: '田中太郎',
        deadline: '2024-09-12',
      },
      {
        id: '7890',
        task: '買い物',
        person: '浅野太郎',
        deadline: '2024-09-14',
      },
    ],
    deleteTodo: fn(),
  },
} satisfies Meta<typeof TodoTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};