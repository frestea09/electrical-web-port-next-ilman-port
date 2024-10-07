import { HamburgerMenu } from "@/components/atoms/hamburger-menu/HamburgerMenu";
import { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { IoMdMenu } from "react-icons/io";

const meta: Meta<typeof HamburgerMenu> = {
  component: HamburgerMenu,
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;
export const Basic: Story = {
  args: {
    listMenu: [
      { label: "One", link: "/" },
      { label: "One", link: "/" },
    ],
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "default"],
      control: {
        type: "select",
      },
    },
  },
};
