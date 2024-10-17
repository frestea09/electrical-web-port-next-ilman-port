import { CostumeLogo } from "@/components/atoms/costume-logo/CostumeLogo";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CostumeLogo> = {
  component: CostumeLogo,
};

export default meta;
type story = StoryObj<typeof CostumeLogo>;
export const Default: story = {
  args: {
    logoName: "Costume",
    variant: "default",
  },
  argTypes: {
    variant: {
      options: ["primary", "default"],
      control: {
        type: "select",
      },
    },
  },
};
