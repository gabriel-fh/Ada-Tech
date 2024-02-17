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
import { StyledLink } from "../Navbar/Navbar.style";
function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <StyledHeader className={menuIsOpen ? 'changeColor' : ''}>
      <StyledLink to={'/'}>
        <Logo>
          <LogoImage src={menuIsOpen ? './recipedia2.svg' : 'recipedia.svg'} />
          <LogoTitle className={menuIsOpen ? 'changeColor' : ''} >Recipédia</LogoTitle>
        </Logo>
      </StyledLink>
      <Navbar isOpen={menuIsOpen} />
      <HamburgerMenu
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className={menuIsOpen ? "isOpen" : ""}
      >
        <MenuLine ></MenuLine>
        <MenuLine></MenuLine>
        <MenuLine></MenuLine>
      </HamburgerMenu>
    </StyledHeader>
  );
}

export default Header;
