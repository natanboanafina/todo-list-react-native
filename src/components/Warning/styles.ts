import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';

export const WarningComponent = styled(Animated.View)`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1000;
    width: ${theme.sizes.halfPercentage};
    height: 20%;
    top: 200px;
    left: 100px;
    align-self: center;
    border-radius: 10px;
    border: 2px solid ${theme.colors.greenShades.darkGreen};
    background-color: ${theme.colors.yellowShades.yellow};
    transition: all 0.3s ease-in-out;
  `}
`;

export const WarningText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.blueShades.blue};
    font-size: ${theme.sizes.medium};
    font-weight: 600;
  `}
`;
