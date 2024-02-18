import RecipeCard from "../../components/RecipeCard";
import { CardSlider, HighlightedText, Main, Section, SubTitle } from "../style/PagesStyle";
import {
  ImageContent,
  MainImage,
  TextContent,
  Title,
} from "./Home.style";

import recipesData from  '../../data/recipesData.json'

const Home = () => {

  const data: Recipes[] = recipesData.recipes;
  console.log(data)

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
        <SubTitle>Receitas <HighlightedText>populares</HighlightedText></SubTitle>
        <CardSlider>
          {data.map(item => (
            <RecipeCard title={item.title} prepTime={item.prepTime} servings={item.servings} />
          ))}
        </CardSlider>
      </Section>
    </Main>
  );
};

export default Home;
