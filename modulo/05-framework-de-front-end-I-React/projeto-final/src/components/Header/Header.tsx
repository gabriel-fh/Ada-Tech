// import HamburgerMenu from "../HamburgerMenu";
import { useState } from "react";
import Navbar from "../Navbar";
import {
  Logo,
  LogoImage,
  LogoTitle,
  StyledHeader,
  HamburgerMenu,
  MenuLine,
} from "./Header.style";
function Header() {

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <StyledHeader>
      <Logo>
        <LogoImage src={"recipedia.svg"} />
        <LogoTitle>Recipédia</LogoTitle>
      </Logo>
      <Navbar isOpen={menuIsOpen} />
      <HamburgerMenu onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <MenuLine></MenuLine>
        <MenuLine></MenuLine>
        <MenuLine></MenuLine>
      </HamburgerMenu>
    </StyledHeader>
  );
}

export default Header;
