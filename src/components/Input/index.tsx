import React from 'react';
import { CustomInput } from './styles';

interface ICustomInput {
  setControlledTask: (text: string) => void;
  controlledTask: string;
}

export const Input: React.FC<ICustomInput> = ({
  setControlledTask,
  controlledTask,
}) => {
  return (
    <>
      <CustomInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={controlledTask}
        onChangeText={text => setControlledTask(text)}
      />
    </>
  );
};
