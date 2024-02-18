import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";

export const SearchBarContent = styled.form`
  width: 100%;
  height: auto;
  position: relative;

  & > {
    &:nth-child(2) {
      left: 1rem;
      top: 0.5rem;
    }

    &:nth-child(3) {
      right: 1rem;
      top: 0.5rem;
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
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  font-size: 2.2rem;
  color: #4c4c4c
`;
