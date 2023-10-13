import React, { useState } from 'react';
import { View, TouchableOpacity, ToastAndroid } from 'react-native';
import { Check } from '../../assets/Icons/Check';
import { Delete } from '../../assets/Icons/Delete';
import { ButtonWrapper, MainButton, EnabledText, DisabledText } from './styles';
import { useTheme } from 'styled-components/native';

interface ITasks {
  item: string;
  handleRemoveTask: (item: string) => void;
}

export const Task: React.FC<ITasks> = ({ item, handleRemoveTask }) => {
  const [isActive, setIsActive] = useState(false);
  const [isConcluded, setIsConcluded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const theme = useTheme();

  const handleConcludeTask = () => {
    setIsActive(!isActive);
    setIsConcluded(!isConcluded);
    if (isConcluded) {
      ToastAndroid.show('Tarefa concluída!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Tarefa desmarcada!', ToastAndroid.SHORT);
    }
  };

  const handleDeleteTask = (item: string) => {
    handleRemoveTask(item);
    setIsDeleted(true);
    ToastAndroid.show('Tarefa deletada!', ToastAndroid.SHORT);
  };

  return (
    <>
      <View>
        <MainButton disabled={isActive} active={isActive}>
          {isActive ? (
            <EnabledText>{item}</EnabledText>
          ) : (
            <DisabledText>{item}</DisabledText>
          )}
          <ButtonWrapper>
            <TouchableOpacity onPress={() => handleConcludeTask()}>
              <Check
                fill={
                  isActive
                    ? theme.colors.whiteShades.white
                    : theme.colors.greenShades.mediumGreen
                }
                stroke={!isActive && theme.colors.greenShades.darkGreen}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDeleteTask(item)}
              disabled={isActive}>
              <Delete
                stroke={theme.colors.whiteShades.beige}
                fill={
                  isActive
                    ? theme.colors.whiteShades.white
                    : theme.colors.blackShades.black
                }
              />
            </TouchableOpacity>
          </ButtonWrapper>
        </MainButton>
      </View>
    </>
  );
};
