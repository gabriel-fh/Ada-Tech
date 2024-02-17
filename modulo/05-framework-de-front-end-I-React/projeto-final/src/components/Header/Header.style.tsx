import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: #f8dcd7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  z-index: 999;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoImage = styled.img`
  width: 2.7rem;
  height: 2.7rem;
`;

export const LogoTitle = styled.span`
  color: #000;
  font-size: 1.7rem;
  font-weight: 500;
`;

export const HamburgerMenu = styled.div`
  width: 3.7rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;
  /* background-color:red; */

  &.isOpen {
    .MenuLine:nth-child(1) {
      transform: rotate(-45deg);
    }

    .MenuLine:nth-child(2) {
      transform: scale(-1);
      opacity: 0;
    }

    .MenuLine:nth-child(3) {
      transform: rotate(45deg);
    }
  }
`;

export const MenuLine = styled.div`
  width: 100%;
  border-radius: 0.2rem;
  /* margin-bottom: .7rem; */
  background-color: #000;
  padding: 0.2rem;
  transition: all ease-in-out 0.6s;
`;
