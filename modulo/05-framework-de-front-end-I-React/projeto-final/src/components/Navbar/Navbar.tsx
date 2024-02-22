import { StyleSheetManager } from "styled-components";
import {
  Nav,
  NavgationListItem,
  NavgationList,
  StyledLink,
} from "./Navbar.style";
import { Dispatch, SetStateAction } from "react";

function Navbar({
  isOpen,
  setMenuIsOpen,
}: {
  isOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "is_open"}>
      <Nav isopen={isOpen.toString()}>
        <NavgationList>
          <NavgationListItem>
            <StyledLink to={"/"} onClick={() => setMenuIsOpen(false)}>
              Home
            </StyledLink>
          </NavgationListItem>
          <NavgationListItem>
            <StyledLink to={"/search"} onClick={() => setMenuIsOpen(false)}>
              Pesquisar
            </StyledLink>
          </NavgationListItem>
        </NavgationList>
      </Nav>
    </StyleSheetManager>
  );
}

export default Navbar;
