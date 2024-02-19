import styled from "styled-components";



export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.1rem;
  z-index: 2;
  font-weight: 600;
  letter-spacing: 0.04rem;
  line-height: 3rem;
`;

export const TextContent = styled.div`
  width: 100vw;
`;
export const ImageContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
`;

export const MainImage = styled.img`
  width: 27rem;
  height: 27rem;
  transform: scaleX(-1);
  transform: rotate(-40deg);
  /* filter: drop-shadow(-10px 9px 50px #b3b1b1); */
`;

