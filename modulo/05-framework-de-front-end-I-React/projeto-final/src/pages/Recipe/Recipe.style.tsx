import styled from "styled-components";

interface ExtraInfoProps {
  color: string;
}

interface IngredientLabel {
  ischecked: string;
}
export const RecipeTitle = styled.h2`
  font-size: 1.9rem;

  @media ${({ theme }) => theme.sizes.md} {
    font-size: 2.5rem;
  }

  @media ${({ theme }) => theme.sizes.xl2} {
    font-size: 3rem;
  }
`;

export const RecipeImageContent = styled.div`
  padding: 1.5rem 0;

  @media ${({ theme }) => theme.sizes.xl} {
    /* height: 45rem; */
    padding: 3rem 0;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;

  @media ${({ theme }) => theme.sizes.md} {
    height: 35rem;
  }

  @media ${({ theme }) => theme.sizes.xl} {
    height: 45rem;
  }

  @media ${({ theme }) => theme.sizes.xl2} {
    height: 60rem;
  }
`;

export const RecipeInfos = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 4rem;
`;

export const RecipeInfoSpan = styled.span`
  font-size: 1.65rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 1rem;

  & > {
    &:nth-child(1) {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2.2rem;
    }
  }

  @media ${({ theme }) => theme.sizes.md} {
    font-size: 2rem;
    & > {
      &:nth-child(1) {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 2.8rem;
      }
    }
  }
  @media ${({ theme }) => theme.sizes.xl2} {
    font-size: 2.3rem;
    & > {
      &:nth-child(1) {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 3rem;
      }
    }
  }
`;

export const RecipeInfosContent = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;

  @media ${({ theme }) => theme.sizes.md} {
    gap: 3rem;
  }

  @media ${({ theme }) => theme.sizes.xl2} {
    gap: 10rem;
    flex-direction: row;
  }
`;

export const RecipeConditionals = styled.div`
  display: grid;
  place-items: end;
  gap: 1rem;

  @media ${({ theme }) => theme.sizes.xl2} {
    display: flex;
    gap: 3rem;
  }
`;

export const ExtraInfo = styled.span<ExtraInfoProps>`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem;
  background-color: ${(props) => props.color};
  border-radius: 0.7rem;
  color: ${({ theme }) => theme.colors.white};

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};

    & :nth-child(1) {
      margin-right: 0.5rem;
    }
  }

  @media ${({ theme }) => theme.sizes.md} {
    font-size: 1.6rem;
  }
`;

export const RecipeInfoList = styled.div`
  padding-bottom: 2rem;

  & > {
    &:nth-child(1) {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }

  @media ${({ theme }) => theme.sizes.md} {
    & > {
      &:nth-child(1) {
        font-size: 2.2rem;
      }
    }
  }

  @media ${({ theme }) => theme.sizes.xl} {
    width: 50%;
  }
  @media ${({ theme }) => theme.sizes.md} {
    & > {
      &:nth-child(1) {
        font-size: 2.5rem;
      }
    }
  }
`;

export const IngredientLabel = styled.label<IngredientLabel>`
  font-size: 1.5rem;
  display: flex;
  align-items: flex-start;
  font-weight: 600;
  gap: 1rem;
  text-decoration: ${({ ischecked }) =>
    ischecked === "true" ? "line-through" : "none"};
  color: ${({ ischecked }) => (ischecked === "true" ? "#797777" : "inherit")};

  @media ${({ theme }) => theme.sizes.md} {
    font-size: 1.8rem;
  }
  @media ${({ theme }) => theme.sizes.xl2} {
    font-size: 2rem;
  }
`;

export const IngredientsContent = styled.div`
  padding: 2rem 0;
  display: grid;
  place-items: start;
  gap: 1rem;

  @media ${({ theme }) => theme.sizes.md} {
    gap: 2rem;
  }

  @media ${({ theme }) => theme.sizes.xl} {
    gap: 1.5rem;
    padding: 2.5rem 0;
  }

  @media ${({ theme }) => theme.sizes.xl2} {
    gap: 2.5rem;
    padding: 3rem 0;
  }
`;

export const CheckBox = styled.input`
  width: 1.7rem;
  height: 1.7rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0.16rem solid #7f7f7f;
  border-radius: 0.3rem;
  transition: background-color 0.3s;
  position: relative;

  &:checked {
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    content: "✔";
    z-index: 1;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  &:checked::before {
    display: block;
  }

  &:checked + label {
    text-decoration: line-through;
  }

  @media ${({ theme }) => theme.sizes.md} {
    width: 2rem;
    height: 2rem;
  }

  @media ${({ theme }) => theme.sizes.xl2} {
    width: 2.5rem;
    height: 2.5rem;

    &::before {
      font-size: 1.8rem;
    }
  }
`;

export const ListContent = styled.ol`
  padding: 2rem 0 0 1.7rem;
  display: grid;
  place-items: start;
  gap: 1.2rem;
  padding: 3rem 2rem;
`;

export const ListItem = styled.li`
  font-size: 1.5rem;
  font-weight: 500;

  &::marker {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  @media ${({ theme }) => theme.sizes.md} {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  @media ${({ theme }) => theme.sizes.xl2} {
    font-size: 2rem;
  }
`;

export const Ingredientsinstructions = styled.div`
  @media ${({ theme }) => theme.sizes.xl} {
    display: flex;
    gap: 1rem;
  }

  @media ${({ theme }) => theme.sizes.xl2} {
    padding-top: 3rem;
  }
`;
