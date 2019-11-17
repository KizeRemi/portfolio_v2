import React from 'react';
import { text } from "@storybook/addon-knobs";
import SkillBloc from '../components/Skill/SkillBloc';
import Button from '../components/Button/Button';

export default {
  title: 'Button',
};

export const ButtonLink = () => (
  <Button link>{text('Label', 'Click me !')}</Button>
);

export const ButtonPrimary = () => (
  <Button>{text('Label', 'Click me !')}</Button>
);
