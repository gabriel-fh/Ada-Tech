import { useParams } from "react-router-dom";
import { Main, Section } from "../PagesStyles/PagesStyles";
import recipesData from "../../data/recipesData.json";
import { useState } from "react";
import {
  ExtraInfo,
  RecipeInfoList,
  RecipeConditionals,
  RecipeImage,
  RecipeImageContent,
  RecipeInfoSpan,
  RecipeInfos,
  RecipeInfosContent,
  RecipeTitle,
  IngredientsContent,
  CheckBox,
  IngredientLabel,
  ListItem,
  ListContent,
  Ingredientsinstructions,
} from "./Recipe.style";
import { Icon } from "@iconify/react/dist/iconify.js";
import { formatPrepTime } from "../../utils/utils";
import { StyleSheetManager } from "styled-components";

const Recipe = () => {
  const { id } = useParams();
  const recipes: Recipe[] = recipesData.recipes;
  const currentRecipe: Recipe | undefined = recipes.find(
    (item) => item.id === Number(id)
  );

  // Cria um array do tamanho da quatidade de ingredientes 
  const initialCheckedItems = currentRecipe
    ? new Array(currentRecipe.ingredients.length).fill(false)
    : [];

  const [checkedItems, setCheckedItems] =
    useState<boolean[]>(initialCheckedItems);

  if (!currentRecipe) return <>Error</>;

  const extras: ExtraInfo[] = [
    {
      condition: currentRecipe.vegetarian,
      text: "Vegetariano",
      color: "#2a742a",
    },
    {
      condition: currentRecipe.glutenFree,
      text: "Sem glúten",
      color: "#74702a",
    },
    {
      condition: !!currentRecipe.videoUrl,
      text: "Ver vídeo",
      color: "#616161",
      link: currentRecipe.videoUrl,
      icon: "solar:play-bold",
    },
  ];

  const recipeInfos: { icon: string; text: string | undefined }[] = [
    {
      icon: "mingcute:time-fill",
      text: formatPrepTime(currentRecipe.prepTime || ""),
    },
    { icon: "streamline:serving-dome-solid", text: currentRecipe.servings },
    { icon: "iconamoon:category-fill", text: currentRecipe.category },
  ];

  // Executa a lógica para o funcionamento dos checkboxes e faz com que cada um seja único
  const handleCheckboxChange = (index: number): void => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <Main>
      <Section>
        <RecipeTitle>{currentRecipe.title}</RecipeTitle>
        <RecipeImageContent>
          <RecipeImage src={currentRecipe.image}></RecipeImage>
        </RecipeImageContent>
        <RecipeInfos>
          <RecipeInfosContent>
            {recipeInfos.map((info, index) => (
              <RecipeInfoSpan key={index}>
                <Icon icon={info.icon} inline />
                {info.text}
              </RecipeInfoSpan>
            ))}
          </RecipeInfosContent>
          <RecipeConditionals>
            {extras.map(
              (extra, index) =>
                extra.condition && (
                  <ExtraInfo key={index} color={extra.color}>
                    {extra.link ? (
                      <a href={extra.link}>
                        <Icon icon={extra.icon || ""} inline />
                        {extra.text}
                      </a>
                    ) : (
                      extra.text
                    )}
                  </ExtraInfo>
                )
            )}
          </RecipeConditionals>
        </RecipeInfos>
        <Ingredientsinstructions>
          <RecipeInfoList>
            <RecipeTitle>Ingredientes</RecipeTitle>
            <IngredientsContent>
              {currentRecipe.ingredients.map((item, index) => (
                <StyleSheetManager
                  shouldForwardProp={(prop) =>
                    prop !== checkedItems[index].toString()
                  }
                  key={index}
                >
                  <IngredientLabel
                    key={index}
                    ischecked={checkedItems[index].toString()}
                    htmlFor={index.toString()}
                  >
                    <CheckBox
                      type="checkbox"
                      id={index.toString()}
                      checked={checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    {item}
                  </IngredientLabel>
                </StyleSheetManager>
              ))}
            </IngredientsContent>
          </RecipeInfoList>
          <RecipeInfoList>
            <RecipeTitle>Modo de Preparo</RecipeTitle>
            <ListContent>
              {currentRecipe.instructions.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </ListContent>
          </RecipeInfoList>
        </Ingredientsinstructions>
      </Section>
    </Main>
  );
};

export default Recipe;
