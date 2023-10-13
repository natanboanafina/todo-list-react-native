import styled, { css } from 'styled-components/native';

export const CustomInput = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.whiteShades.white};
    color: ${theme.colors.grayShades.coldGris};
    border: 2px solid ${theme.colors.grayShades.aroGris};
    border-radius: 5px;
    font-size: ${theme.sizes.medium};
    font-weight: 700;
    padding: 10px;
    margin-right: 10px;
  `}
`;
