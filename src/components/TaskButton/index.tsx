import React, { useState } from 'react';
import * as Styled from './styles';
import { ToastAndroid, Keyboard } from 'react-native';
import { Add } from '../../assets/Icons/Add';
import { useTheme } from 'styled-components/native';

interface ITasksButton {
  handleAdd: () => void;
}

export const TaskButton: React.FC<ITasksButton> = ({ handleAdd }) => {
  const theme = useTheme();

  return (
    <>
      <Styled.AddTaskButton onPress={handleAdd}>
        <Styled.AddTaskButtonWrapper>
          <Add fill="none" stroke={theme.colors.whiteShades.white} />
        </Styled.AddTaskButtonWrapper>
      </Styled.AddTaskButton>
    </>
  );
};
