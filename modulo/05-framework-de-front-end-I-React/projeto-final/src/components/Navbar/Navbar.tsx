import { StyleSheetManager } from "styled-components";
import {
  Nav,
  NavgationListItem,
  NavgationList,
  StyledLink,
} from "./Navbar.style";

const Navbar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "is_open"}>
      <Nav isopen={isOpen.toString()}>
        <NavgationList>
          <NavgationListItem>
            <StyledLink to={"/"}>Home</StyledLink>
          </NavgationListItem>
          <NavgationListItem>
            <StyledLink to={"/recipe"}>Receita</StyledLink>
          </NavgationListItem>
          <NavgationListItem>
            <StyledLink to={"/search"}>Pesquisar</StyledLink>
          </NavgationListItem>
        </NavgationList>
      </Nav>
    </StyleSheetManager>
  );
}

export default Navbar;
