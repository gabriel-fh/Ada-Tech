import { useRef, useState, useEffect } from "react";
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
  const headerRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // Verifica se foi clicado fora do header e fecha o menu hamburger
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        menuIsOpen
      ) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuIsOpen]);

  // Observa a largura atual da tela para mostrar ou esconder o meunu hamburger
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <StyledHeader ref={headerRef} className={menuIsOpen ? "changeColor" : ""}>
      <StyledLink to={"/"}>
        <Logo>
          <LogoImage
            src={menuIsOpen ? "/recipedia2.svg" : "/recipedia.svg"}
            alt={"Recipédia Logo"}
          />
          <LogoTitle className={menuIsOpen ? "changeColor" : ""}>
            Recipédia
          </LogoTitle>
        </Logo>
      </StyledLink>
      <Navbar isOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      {screenWidth < 1024 && (
        <HamburgerMenu
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className={menuIsOpen ? "isOpen" : ""}
        >
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
        </HamburgerMenu>
      )}
    </StyledHeader>
  );
}

export default Header;
