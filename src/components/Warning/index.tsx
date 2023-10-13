import React from 'react';
import { Animated } from 'react-native';
import { WarningComponent, WarningText } from './styles';

interface IWaning {
  text: string;
  animationFade: Animated.Value;
  fading: () => void;
}

export const Warning: React.FC<IWaning> = ({ text, animationFade, fading }) => {
  return (
    <>
      <WarningComponent style={{ opacity: animationFade }}>
        <WarningText>{text}</WarningText>
      </WarningComponent>
    </>
  );
};
