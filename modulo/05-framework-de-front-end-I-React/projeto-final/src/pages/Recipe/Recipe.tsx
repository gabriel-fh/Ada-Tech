import { useParams } from "react-router-dom";
import { Main, Section } from "../style/PagesStyle";
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
} from "./Recipe.style";
import { Icon } from "@iconify/react/dist/iconify.js";
import { formatPrepTime } from "../../utils/utils";
import { StyleSheetManager } from "styled-components";

const Recipe = () => {
  const data: Recipe[] = recipesData.recipes;

  const { id } = useParams();

  const [currentRecipe, setCurrentRecipe] = useState<Recipe | undefined>(
    data.find((item) => item.id === Number(id))
  );

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(currentRecipe?.ingredients.length).fill(false)
  );

  const handleCheckboxChange = (index: number): void => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <Main>
      <Section>
        {currentRecipe ? (
          <>
            <RecipeTitle>{currentRecipe.title}</RecipeTitle>
            <RecipeImageContent>
              <RecipeImage src={currentRecipe.image}></RecipeImage>
            </RecipeImageContent>
            <RecipeInfos>
              <RecipeInfosContent>
                <RecipeInfoSpan>
                  <Icon icon="mingcute:time-fill" inline />
                  {formatPrepTime(currentRecipe.prepTime)}
                </RecipeInfoSpan>
                <RecipeInfoSpan>
                  <Icon icon="streamline:serving-dome-solid" />
                  {currentRecipe.servings}
                </RecipeInfoSpan>
                <RecipeInfoSpan>
                  <Icon icon="iconamoon:category-fill" />
                  {currentRecipe.category}
                </RecipeInfoSpan>
              </RecipeInfosContent>
              {(currentRecipe.vegetarian ||
                currentRecipe.glutenFree ||
                currentRecipe.videoUrl) && (
                <RecipeConditionals>
                  {currentRecipe.vegetarian && (
                    <ExtraInfo color="#2a742a">Vegetariano</ExtraInfo>
                  )}
                  {currentRecipe.glutenFree && (
                    <ExtraInfo color="#74702a">Sem glutém</ExtraInfo>
                  )}
                  {currentRecipe.videoUrl && (
                    <ExtraInfo color="#616161">
                      <a href={currentRecipe.videoUrl}>
                        <Icon icon="solar:play-bold" inline />
                        Ver video
                      </a>
                    </ExtraInfo>
                  )}
                </RecipeConditionals>
              )}
            </RecipeInfos>
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
          </>
        ) : (
          <></>
        )}
      </Section>
    </Main>
  );
};

export default Recipe;
