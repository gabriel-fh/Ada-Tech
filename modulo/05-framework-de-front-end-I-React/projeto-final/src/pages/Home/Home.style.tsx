import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.1rem;
  z-index: 2;
  font-weight: 600;
  letter-spacing: 0.04rem;
  line-height: 3rem;

  @media screen and (min-width: 768px) {
    font-size: 2.8rem;
    line-height: 4rem;
    letter-spacing: 0.07rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3.5rem;
    line-height: 5rem;
    letter-spacing: 0.15rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 4rem;
    line-height: 6rem;
    letter-spacing: 0.2rem;
  }
`;

export const TextContent = styled.div`
  width: 100vw;

  @media screen and (min-width: 425px) {
    width: 70vw;
  }

  @media screen and (min-width: 768px) {
    width: 100vw;
  }
`;
export const ImageContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media screen and (min-width: 1440px) {
    padding-right: 5rem;
    justify-content: none;
  }

`;

export const MainImage = styled.img`
  width: 27rem;
  height: 27rem;
  @media screen and (min-width: 768px) {
    width: 31rem;
    height: 31rem;
  }

  @media screen and (min-width: 1024px) {
    width: 33rem;
    height: 33rem;
  }

  @media screen and (min-width: 1440px) {
    width: 40rem;
    height: 40rem;
  }
`;
