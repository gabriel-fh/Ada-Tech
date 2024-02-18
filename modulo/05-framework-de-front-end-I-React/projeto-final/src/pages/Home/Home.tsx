import RecipeCard from "../../components/RecipeCard";
import {
  CardSlider,
  HighlightedText,
  Main,
  Section,
  StyledLink,
  SubTitle,
} from "../style/PagesStyle";
import { ImageContent, MainImage, TextContent, Title } from "./Home.style";

import recipesData from "../../data/recipesData.json";
import { getSlug } from "../../utils/utils"; // Ajuste o caminho conforme a estrutura do seu projeto

const Home = () => {
  const data: Recipes[] = recipesData.recipes;

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
          <MainImage src={"food.png"} />
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
              />
            </StyledLink>
          ))}
        </CardSlider>
      </Section>
    </Main>
  );
};

export default Home;
