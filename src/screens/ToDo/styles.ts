import styled, { css } from 'styled-components/native';

export const SafeView = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    justify-content: space-between;
    background-color: ${theme.colors.whiteShades.beige};
  `}
`;

export const Wrapper = styled.View`
  ${({ theme }) => css`
    padding: ${theme.sizes.medium};
  `}
`;
export const InputWrapper = styled(Wrapper)`
  ${() => css`
    padding: 2px;
    flex-direction: row;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.blackShades.black};
    font-size: ${theme.sizes.xMedium};
    line-height: 35px;
    margin-left: 5px;
    margin-bottom: ${theme.sizes.medium};
    text-align: left;
  `}
`;
