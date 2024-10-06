import { CustomeButton } from "@/components/atoms/CustomeButton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CustomeButton> = {
  component: CustomeButton,
};

export default meta;

type Story = StoryObj<typeof CustomeButton>;
export const Basic: Story = {};
