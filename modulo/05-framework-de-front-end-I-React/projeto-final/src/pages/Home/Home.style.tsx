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
`;

export const MainImage = styled.img`
  width: 27rem;
  height: 27rem;
  transform: scaleX(-1);
  transform: rotate(-40deg);
  /* filter: drop-shadow(-10px 9px 50px #b3b1b1); */
  @media screen and (min-width: 768px) {
    width: 31rem;
    height: 31rem;
  }
`;
