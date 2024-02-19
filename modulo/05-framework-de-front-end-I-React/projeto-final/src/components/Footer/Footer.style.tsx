import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 1rem ;
  background-color: #fea58d;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }

`;

export const FooterSpan = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
    font-weight: 600;
  }

`;
