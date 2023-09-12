import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { AppTitle } from '.';

export default {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  parameters: {
    backgrounds: {
      default: 'Header background color',
      values: [{ name: 'Header background color', value: '#304ffe' }],
    },
  },
} as ComponentMeta<typeof AppTitle>;

const Template: ComponentStory<typeof AppTitle> = () => (
  <BrowserRouter>
    <AppTitle />
  </BrowserRouter>
);

export const Default = Template.bind({});
