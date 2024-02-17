import styled from "styled-components";

export const Section = styled.section`
  min-height: 35vh;
  width: 100%;
  padding: 2rem 1.5rem;
  position: relative;

  &.text-image {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.1rem;
  z-index: 2;
  font-weight: 600;
  letter-spacing: 0.04rem;
  line-height: 3rem;
`;

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
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
  filter: drop-shadow(-10px 9px 50px #b3b1b1);
`;

export const SubTitle = styled.h2 `
  font-size: 2rem;
  font-weight: 600;
  
`;