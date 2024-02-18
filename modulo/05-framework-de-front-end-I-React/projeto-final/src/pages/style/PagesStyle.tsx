import styled from "styled-components";

export const Main = styled.main`
  padding: 4.9rem 0;
`;

export const Section = styled.section`
  min-height: 35vh;
  width: 100%;
  padding: 2rem 1.5rem;
  position: relative;
  overflow: hidden;

  &.text-image {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
`;

export const CardSlider = styled.div`
  padding: 2rem .5rem;
  display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  gap: 1.5rem;
  overflow: auto;
  height: auto;
`;
