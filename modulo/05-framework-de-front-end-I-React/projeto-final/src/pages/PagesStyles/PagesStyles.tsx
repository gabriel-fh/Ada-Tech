import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  padding: 4.9rem 0;
  min-height: 92.2vh;

  @media screen and (min-width: 768px) {
    padding: 8rem 0;
  }
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

  @media screen and (min-width: 768px) {
    padding: 2rem 2.5rem;

    &.text-image {
      flex-wrap: nowrap !important;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 2rem 4rem;
  }
`;

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

export const CardWrapper = styled.div`
  padding: 2rem 0.5rem;
  display: flex;
  gap: 1.5rem;
  overflow: auto;
  height: auto;

  @media screen and (min-width: 1024px) {
    padding: 3rem 0.5rem;
    gap: 2.5rem;
  }

  &::-webkit-scrollbar {
    width: auto;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bfbdbd;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #e5e4e4;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a5a4a4;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const CategoriesContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4rem;

  @media screen and (min-width: 425px) {
    gap: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 3rem 1.5rem;
    gap: 3.5rem;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1024px) {
    padding: 4rem 1.5rem;
    gap: 5rem;
  }
`;
