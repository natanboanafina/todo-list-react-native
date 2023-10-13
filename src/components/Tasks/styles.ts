import styled, { css } from 'styled-components/native';

interface IProps {
  active: boolean;
}

export const ButtonWrapper = styled.View`
  ${() => css`
    flex-direction: row;
  `}
`;

export const MainButton = styled.Pressable<IProps>`
  ${({ theme, active }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dcdcdc;
    padding: 10px;
    margin-top: 15px;
    border-radius: 3px;
    width: ${theme.sizes.fullPercentage};
    background-color: ${active
      ? theme.colors.greenShades.mediumGreen
      : !active
      ? theme.colors.grayShades.lightGray2
      : theme.colors.blueShades.lightBlue};
    color: ${active
      ? theme.colors.whiteShades.white
      : theme.colors.blackShades.black};
  `}
`;

export const DisabledText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.blackShades.black};
    font-weight: 700;
    font-size: ${theme.sizes.medium};
  `}
`;

export const EnabledText = styled(DisabledText)`
  ${({ theme }) => css`
    color: ${theme.colors.grayShades.lightGray2};
  `}
`;
