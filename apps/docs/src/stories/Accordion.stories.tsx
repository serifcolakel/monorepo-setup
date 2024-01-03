import type { Meta, StoryObj } from '@storybook/react';

import { Accordion, AccordionProps } from '@serif//library';

const meta: Meta<AccordionProps> = {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export function Multiple(args: Story['args']) {
  return (
    <Accordion className="p-4 space-y-2" mode="multiple" {...args}>
      <Accordion.Section>
        <Accordion.Trigger
          className="flex flex-row items-center justify-between p-8 rounded-lg"
          id="1"
        >
          Section 1
        </Accordion.Trigger>
        <Accordion.Content className="text-primary-500" id="1">
          Content for Section 1
        </Accordion.Content>
      </Accordion.Section>

      <Accordion.Section>
        <Accordion.Trigger
          className="flex flex-row items-center justify-between p-8 rounded-lg"
          id="2"
        >
          Section 2
        </Accordion.Trigger>
        <Accordion.Content className="text-primary-500" id="2">
          Content for Section 2
        </Accordion.Content>
      </Accordion.Section>
    </Accordion>
  );
}

export function Single(args: Story['args']) {
  return (
    <Accordion className="p-4 space-y-2" mode="single" {...args}>
      <Accordion.Section>
        <Accordion.Trigger
          className="flex flex-row items-center justify-between p-8 rounded-lg"
          id="1"
        >
          Section 1
        </Accordion.Trigger>
        <Accordion.Content className="text-primary-500" id="1">
          Content for Section 1
        </Accordion.Content>
      </Accordion.Section>

      <Accordion.Section>
        <Accordion.Trigger
          className="flex flex-row items-center justify-between p-8 rounded-lg"
          id="2"
        >
          Section 2
        </Accordion.Trigger>
        <Accordion.Content className="text-primary-500" id="2">
          Content for Section 2
        </Accordion.Content>
      </Accordion.Section>
    </Accordion>
  );
}
