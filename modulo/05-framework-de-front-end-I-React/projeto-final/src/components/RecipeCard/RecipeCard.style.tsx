import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 19rem;
  height: 21rem;
  border-radius: 0.7rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 20rem;
    height: 22rem;
  }

  @media screen and (min-width: 1024px) {
    width: 22rem;
    height: 24rem;
  }
`;

export const CardImageContent = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  width: 19rem;
  height: 13.2rem;

  @media screen and (min-width: 768px) {
    width: 20rem;
    height: 14rem;
  }

  @media screen and (min-width: 1024px) {
    width: 22rem;
    height: 14rem;
  }
`;

export const CardDescription = styled.div`
  padding: 0.3rem 1rem;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  justify-content: space-between;
  /* align-items: center; */
  /* text-align: center; */
  height: 100%;

  @media screen and (min-width: 1024px) {
    padding: .7rem;
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
  padding: 0.8rem 1rem;
`;

export const CardSpan = styled.span`
  font-size: 1rem;
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
    font-size: 1.2rem;

    & > {
      &:nth-child(1) {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.3rem;
    gap: 0.7rem;
    & > {
      &:nth-child(1) {
        font-size: 1.7rem;
      }
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const CardDesc = styled.span`
  font-size: 1.2rem;
  color: #757575;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;

  @media screen and (min-width: 1024px) {
    font-size: 1.4rem
  }

`;
