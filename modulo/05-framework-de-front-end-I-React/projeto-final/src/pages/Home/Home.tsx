import {
  HighlightedText,
  ImageContent,
  MainImage,
  Section,
  SubTitle,
  TextContent,
  Title,
} from "./Home.style";

const Home = () => {
  return (
    <main>
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
        
      </Section>
    </main>
  );
};

export default Home;
