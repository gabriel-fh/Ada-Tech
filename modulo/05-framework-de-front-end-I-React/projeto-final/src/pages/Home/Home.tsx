import RecipeCard from "../../components/RecipeCard";
import {
  CardSlider,
  HighlightedText,
  Main,
  Section,
  StyledLink,
  SubTitle,
} from "../style/PagesStyle";
import {
  CategoriesContainer,
  CategoryContent,
  CategoryImage,
  CategoryName,
  ImageContent,
  MainImage,
  RoundedImage,
  TextContent,
  Title,
} from "./Home.style";

import recipesData from "../../data/recipesData.json";
import { getSlug } from "../../utils/utils";
import { StyleSheetManager } from "styled-components";

const Home = () => {
  const data: Recipes[] = recipesData.recipes;

  const categoryData: { name: string; image: string }[] = [
    {
      name: "Massas",
      image:
        "https://media.istockphoto.com/id/1056314414/pt/foto/pasta-pesto-sauce-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=zGoDMmFCbq885XFqJNgq8X90jnqHEkR6pzA9X_VzdAY=",
    },
    {
      name: "Saladas",
      image:
        "https://media.istockphoto.com/id/1917934177/pt/foto/delicious-salad-in-bowl-isolated-on-white-top-view.jpg?s=612x612&w=0&k=20&c=ZnirermwusmQrXk4daYwQs3Nr0DhLGYVydmH--Q1uHQ=",
    },
    {
      name: "Sobremesas",
      image:
        "https://t3.ftcdn.net/jpg/05/74/69/60/360_F_574696092_7N3HZQKEVr2AHWl9oPohNgbpPZo0AutP.jpg",
    },
    {
      name: "Bebidas",
      image:
        "https://media.istockphoto.com/id/105597995/pt/foto/mojito-cocktail.jpg?s=612x612&w=0&k=20&c=H3SnEqux-dPlFGIFWIJ_cSOMfWDOUzPwUEEaWDxoCVc=",
    },
    {
      name: "Pratos Principais",
      image:
        "https://media.istockphoto.com/id/1268693109/pt/foto/roast-chicken.jpg?s=612x612&w=0&k=20&c=OoC84ofLPb9_TeoKf9T-dATqBCBbJJ9j3578HLgJS_M=",
    },
  ];

  return (
    <Main>
      <Section className="text-image">
        <TextContent>
          <Title>
            Descubra <HighlightedText>sabores</HighlightedText>, desfrute de{" "}
            <HighlightedText>receitas</HighlightedText>, seja o{" "}
            <HighlightedText>chef</HighlightedText> da sua história
            <HighlightedText> culinária</HighlightedText>.
          </Title>
        </TextContent>
        <ImageContent>
          <MainImage src={"food.png"} alt={"prato-de-comida"} />
        </ImageContent>
      </Section>
      <Section>
        <SubTitle>
          Receitas <HighlightedText>populares</HighlightedText>
        </SubTitle>
        <CardSlider>
          {data.map((item) => (
            <StyledLink
              to={`/recipe/${encodeURI(getSlug(item.title))}/${item.id}`}
              key={item.id}
            >
              <RecipeCard
                title={item.title}
                prepTime={item.prepTime}
                servings={item.servings}
                image={item.image}
              />
            </StyledLink>
          ))}
        </CardSlider>
      </Section>
      <Section>
        <SubTitle>
          Navegue por <HighlightedText>categorias</HighlightedText>
        </SubTitle>
        <CategoriesContainer>
          {categoryData.map((item, index) => (
            <CategoryContent key={index}>
              <CategoryImage>
                <StyleSheetManager
                  shouldForwardProp={(prop) => prop !== item.image}
                >
                  <RoundedImage backgroundimage={item.image} />
                </StyleSheetManager>
              </CategoryImage>
              <CategoryName>{item.name}</CategoryName>
            </CategoryContent>
          ))}
        </CategoriesContainer>
      </Section>
    </Main>
  );
};

export default Home;
