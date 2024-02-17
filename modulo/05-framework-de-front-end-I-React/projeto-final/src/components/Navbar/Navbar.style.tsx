import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavProps {
  isopen: string;
}

export const Nav = styled.div<NavProps>`
  position: fixed;
  top: 7.2vh;
  right: ${(props) => (props.isopen == 'true' ? '0' : '-100%')};
  width: 65%;
  height: 100vh;
  background-color: #000;
  transition: all 0.5s;
  z-index: 999;

  &.closeNavigation {
    position: absolute;
    left: -100%;
  }
`;

export const NavgationList = styled.ul`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavgationListItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
`;
