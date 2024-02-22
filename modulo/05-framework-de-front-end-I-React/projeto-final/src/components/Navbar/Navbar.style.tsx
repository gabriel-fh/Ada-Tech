import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavProps {
  isopen: string;
}

export const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 7.19vh;
  right: ${(props) => (props.isopen == "true" ? "0" : "-100%")};
  width: 61%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 50px 15px 0px;

  &.closeNavigation {
    position: absolute;
    left: -100%;
  }

  @media screen and (min-width: 425px) {
    width: 50%;
  }

  @media ${({ theme }) => theme.sizes.md} {
    width: 40%;
    top: 5.7rem;
  }

  @media ${({ theme }) => theme.sizes.xl} {
    position: static;
    height: auto;
    display: flex;
    align-items: center;
    background: none;
    box-shadow: none;
    width: auto;
  }
`;

export const NavgationList = styled.ul`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  @media ${({ theme }) => theme.sizes.xl} {
    align-items: center;
    flex-direction: row;
    gap: 5rem;
  }
`;

export const NavgationListItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.sizes.md} {
    font-size: 2.3rem;
  }
  @media ${({ theme }) => theme.sizes.xl} {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
