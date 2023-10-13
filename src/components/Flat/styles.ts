import styled, { css } from 'styled-components/native';

export const CustomFlatList = styled.FlatList`
  ${() => css`
    width: 90%;
    align-self: center;
    margin-top: 10px;
    padding: 5px;
    border-radius: 10px;
  `}
`;
