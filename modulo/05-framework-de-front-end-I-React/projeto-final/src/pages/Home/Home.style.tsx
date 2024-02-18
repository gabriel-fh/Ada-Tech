import styled from "styled-components";

interface RoundedImageProps {
  backgroundimage: string;
}

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.1rem;
  z-index: 2;
  font-weight: 600;
  letter-spacing: 0.04rem;
  line-height: 3rem;
`;

export const TextContent = styled.div`
  width: 100vw;
`;
export const ImageContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
`;

export const MainImage = styled.img`
  width: 27rem;
  height: 27rem;
  transform: scaleX(-1);
  transform: rotate(-40deg);
  /* filter: drop-shadow(-10px 9px 50px #b3b1b1); */
`;

export const CategoriesContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4rem;
`;

export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  gap: 1rem;
  min-height: 12rem;
`;

export const CategoryName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  /* color: ${({ theme }) => theme.colors.primary} */
`;

export const CategoryImage = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  outline: .3rem solid ${({theme}) => theme.colors.primary};
  display: grid;
  place-items: center;
`;

export const RoundedImage = styled.div<RoundedImageProps>`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 100%;
  background-image: ${(props) => props.backgroundimage && `url(${props.backgroundimage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200%;
`;
