import styled from "styled-components";

interface ExtraInfoProps {
  color: string;
}

interface IngredientLabel {
  ischecked: string;
}
export const RecipeTitle = styled.h2`
  font-size: 1.9rem;
`;

export const RecipeImageContent = styled.div`
  padding: 1.5rem 0;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
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
`;

export const RecipeInfosContent = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
`;

export const RecipeConditionals = styled.div`
  display: grid;
  place-items: end;
  gap: 1rem;
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
        margin-right: .5rem;
    }
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

`;

export const IngredientsContent = styled.div`
  padding: 2rem 0;
  display: grid;
  place-items: start;
  gap: 0.7rem;
`;

export const CheckBox = styled.input`
  /* margin-top: 0.3rem; */
  width: 1.5rem;
  height: 1.5rem;
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
    /* Outros estilos para o texto riscado, se necessário */
  }
`;

export const ListContent = styled.ol`
  padding: 2rem 0 0 1.7rem;
  display: grid;
  place-items: start;
  gap: 1.2rem;
`;

export const ListItem = styled.li`
  font-size: 1.5rem;
  font-weight: 500;

  &::marker {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;
