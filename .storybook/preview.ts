import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { types } from "util";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
