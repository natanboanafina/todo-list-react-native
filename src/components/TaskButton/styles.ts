import styled, { css } from 'styled-components/native';

export const AddTaskButton = styled.TouchableOpacity`
  ${() => css`
    background-color: #006400;
    padding: 5px;
    border-radius: 5px;
    justify-content: center;
  `}
`;

export const AddTaskButtonWrapper = styled.View`
  ${() => css`
    padding: 5px;
    background-color: transparent;
  `}
`;
