import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";

export const SearchResults = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SearchBarContent = styled.form`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  gap: 1rem;

  & > {
    &:nth-child(2) {
      left: 1rem;
      top: 0.5rem;
    }

    &:nth-child(3) {
      right: 1rem;
      top: 0.5rem;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1440px) {
    & > {
      &:nth-child(2) {
        left: 1rem;
        top: 0.7rem;
      }

      &:nth-child(3) {
        right: 1rem;
        top: 0.7rem;
        color: red;
      }
    }
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  outline: none;
  padding: 0.6rem 4rem 0.6rem 4rem;
  border-radius: 2rem;
  border: 0.1rem solid #818080;
  font-weight: 500;
  font-size: 1.5rem;

  @media screen and (min-width: 1440px) {
    padding: 1rem 5rem;
    font-size: 1.7rem;
  }
`;

export const StyledIcon = styled(Icon)`
  font-size: 2.2rem;
  color: #4c4c4c;
  position: absolute;

  @media screen and (min-width: 1440px) {
    font-size: 2.7rem;
  }
`;

export const FilterContent = styled.div`
  padding-top: 2rem;
  flex: 1;
`;

export const FilterItem = styled.span`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0.5rem;
  border-radius: 0.7rem;

  cursor: pointer;

  & > {
    &:nth-child(1) {
      font-size: 2.2rem;
      margin-left: 0.5rem;
      padding-top: 0.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0.7rem 1rem;
    font-size: 1.7rem;
  }

  @media screen and (min-width: 1024px) {
    & > {
      &:nth-child(1) {
        font-size: 2.7rem;
      }
    }
  }
`;

export const ResponseSearch = styled.span`
  font-size: 1.7rem;
  text-align: center;
  font-weight: 500;
`;

export const CategoriesContent = styled.div`
  @media screen and (min-width: 1440px) {
    display: grid;
    place-items: center;

    & > {
      &:nth-child(2) {
        text-align: center;
      }
    }
  }
`;
