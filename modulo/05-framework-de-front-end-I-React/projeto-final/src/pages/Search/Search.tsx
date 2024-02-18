import { Main, SearchResults, Section, StyledLink } from "../style/PagesStyle";
import { SearchBar, SearchBarContent, StyledIcon } from "./Search.style";
import { ChangeEvent, useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard";
import { getSlug } from "../../utils/utils";
import recipesData from "../../data/recipesData.json";

const Search = () => {
  const data: Recipe[] = recipesData.recipes;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Recipe[] | null>(null);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      const filteredResults: Recipe[] | null = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
      console.log(searchResults);
    } else {
      setSearchResults(null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <Main>
      <Section>
        <SearchBarContent>
          <SearchBar
            type="text"
            placeholder="Pesquisar..."
            onChange={handleChangeInput}
          ></SearchBar>
          <StyledIcon icon={"tabler:search"} inline></StyledIcon>
          <StyledIcon icon={"ic:round-close"} inline></StyledIcon>
        </SearchBarContent>
        <SearchResults>
          {searchTerm.length > 0 && searchTerm.length < 3 ? (
            <>Digitar no minimo 3 caracteres</>
          ) : searchResults ? (
            searchResults.length > 0 ? (
              searchResults.map((item) => (
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
              ))
            ) : (
              <>nada encontrado</>
            )
          ) : (
            <>Conteudo Padrão</>
          )}
        </SearchResults>
      </Section>
    </Main>
  );
};

export default Search;
