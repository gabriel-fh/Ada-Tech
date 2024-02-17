import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  z-index: 999;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.5s;
  &.changeColor {
    background-color: ${({ theme }) => theme.colors.primary};
    
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const LogoImage = styled.img`
  width: 2.9rem;
  height: 2.9rem;
  
`;

export const LogoTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.7rem;
  font-weight: 500;
  transition: all 0.5s;

  &.changeColor {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const MenuLine = styled.div`
  width: 100%;
  border-radius: 0.15rem;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.19rem;
  transition: all ease-in-out 0.6s;
`;

export const HamburgerMenu = styled.div`
  width: 3.5rem;
  display: grid;
  place-items: center;
  position: relative;
  gap: 0.5rem;

  &.isOpen > {
    &.isOpen > {
      background-color: ${({ theme }) => theme.colors.white};
    }

    & :nth-child(1):nth-child(1) {
      position: absolute;
      transform: rotate(-45deg);
      background-color: ${({ theme }) => theme.colors.white};
    }

    & :nth-child(2):nth-child(2) {
      transform: scale(-1);
      opacity: 0;
      background-color: ${({ theme }) => theme.colors.white};
    }

    & :nth-child(3):nth-child(3) {
      position: absolute;
      transform: rotate(45deg);
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
