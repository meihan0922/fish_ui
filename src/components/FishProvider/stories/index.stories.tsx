import type { Meta } from '@storybook/react-vite';
import { FishProvider } from 'fish-ui';
import CustomSource from './custom.stories?raw';
import { Custom } from './custom.stories';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '組件/FishProvider',
  component: FishProvider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

} satisfies Meta<typeof FishProvider>;

export default meta;


export const CustomFishProvider = {
  render: () => <Custom />,
  parameters: {
    docs: {
      source: {
        code: CustomSource
      }
    }
  }
}


