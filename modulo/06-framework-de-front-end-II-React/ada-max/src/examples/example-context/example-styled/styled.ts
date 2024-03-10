import styled, { css } from "styled-components";

type MyType = { isBlue?: boolean };

export const Span = styled.span`
  color: yellow;
`;

export const Title = styled.h1<MyType>`
  background-color: #000;
  color: red;

  ${({ isBlue }) =>
    isBlue &&
    css`
      color: blue;

      ${Span} {
        color: blue;
      }
    `}

  .menu {
    color: pink;
  }
`;

export const SubTitle = styled.h2`
  background-color: #43e;
`;
