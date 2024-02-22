import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.1rem;
  z-index: 2;
  font-weight: 600;
  letter-spacing: 0.04rem;
  line-height: 3rem;

  @media ${({ theme }) => theme.sizes.md} {
    font-size: 2.8rem;
    line-height: 4rem;
    letter-spacing: 0.07rem;
  }

  @media ${({ theme }) => theme.sizes.xl} {
    font-size: 3.5rem;
    line-height: 5rem;
    letter-spacing: 0.15rem;
  }

  @media ${({ theme }) => theme.sizes.xl2} {
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

  @media ${({ theme }) => theme.sizes.md} {
    width: 100vw;
  }
`;
export const ImageContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media ${({ theme }) => theme.sizes.xl2} {
    padding-right: 5rem;
    justify-content: none;
  }
`;

export const MainImage = styled.img`
  width: 27rem;
  height: 27rem;
  @media ${({ theme }) => theme.sizes.md} {
    width: 31rem;
    height: 31rem;
  }

  @media ${({ theme }) => theme.sizes.xl} {
    width: 33rem;
    height: 33rem;
  }

  @media ${({ theme }) => theme.sizes.xl2} {
    width: 40rem;
    height: 40rem;
  }
`;
