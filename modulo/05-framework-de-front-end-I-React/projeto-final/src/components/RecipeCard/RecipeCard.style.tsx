import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 21rem;
  border-radius: 0.7rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 22rem;
    height: 23rem;
  }
`;

export const CardImageContent = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  width: 20rem;
  height: 13.2rem;
  @media screen and (min-width: 768px) {
    width: 22rem;
    height: 15rem;
  }
`;

export const CardDescription = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
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
  padding: 0.5rem 1rem;
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

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;

    & > {
      &:nth-child(1) {
        font-size: 1.7rem;
      }
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  @media screen and (min-width: 768px) {
    font-size: 1.9rem;
  }
`;

