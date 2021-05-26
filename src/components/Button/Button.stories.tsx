import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Buttons',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  backgroundColor: '#42aff5'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  backgroundColor: '#f40d0d'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  backgroundColor: '#42aff5'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  backgroundColor: '#42aff5'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'small',
  label: 'Button',
  backgroundColor: '#42aff5'
};
