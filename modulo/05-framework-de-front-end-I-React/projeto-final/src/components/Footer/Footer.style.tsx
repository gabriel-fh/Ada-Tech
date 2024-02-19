import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 1rem 1.2rem;
  background-color: #fea58d;
  text-align: center;
`;

export const FooterSpan = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 500
`;
