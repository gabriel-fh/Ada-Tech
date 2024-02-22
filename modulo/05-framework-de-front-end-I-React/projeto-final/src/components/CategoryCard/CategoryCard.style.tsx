import styled from "styled-components";

interface RoundedImageProps {
  backgroundimage: string;
}

export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  gap: 1rem;
  min-height: 12rem;
  cursor: pointer;
`;

export const CategoryName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;

  @media ${({ theme }) => theme.sizes.md} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.sizes.xl} {
    font-size: 1.7rem;
  }
`;

export const CategoryImage = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  outline: 0.3rem solid ${({ theme }) => theme.colors.primary};
  display: grid;
  place-items: center;

  @media ${({ theme }) => theme.sizes.md} {
    width: 10rem;
    height: 10rem;
  }

  @media ${({ theme }) => theme.sizes.xl} {
    width: 10.5rem;
    height: 10.5rem;
    outline: 0.35rem solid ${({ theme }) => theme.colors.primary};
  }
`;

export const RoundedImage = styled.div<RoundedImageProps>`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 100%;
  background-image: ${(props) =>
    props.backgroundimage && `url(${props.backgroundimage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200%;

  @media ${({ theme }) => theme.sizes.md} {
    width: 9.5rem;
    height: 9.5rem;
  }

  @media ${({ theme }) => theme.sizes.xl} {
    width: 10rem;
    height: 10rem;
  }
`;
