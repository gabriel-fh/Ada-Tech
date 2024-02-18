import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 21rem;
  border-radius: 0.7rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const CardImageContent = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  width: 20rem;
`;

export const CardDescription = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  & > {
    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.primary};
      align-self: flex-end;
      font-size: 1.3rem;
      font-weight: 500;
      text-decoration: underline;
      text-decoration-thickness: 0.15rem;
      cursor: pointer;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  background-color: rgb(255, 255, 255, 0.9);
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 1.2rem;
`;

export const CardSpan = styled.span`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};

  & > {
    &:nth-child(1) {
      font-size: 1.5rem;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
`;
