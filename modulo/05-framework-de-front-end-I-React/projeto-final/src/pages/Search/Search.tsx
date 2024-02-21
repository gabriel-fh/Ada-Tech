import {
  CategoriesContainer,
  HighlightedText,
  Main,
  Section,
  StyledLink,
  SubTitle,
} from "../PagesStyles/PagesStyles";
import {
  CategoriesContent,
  FilterContent,
  FilterItem,
  ResponseSearch,
  SearchBar,
  SearchBarContent,
  SearchResults,
  StyledIcon,
} from "./Search.style";
import { ChangeEvent, useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard";
import { getSlug } from "../../utils/utils";
import recipesData from "../../data/recipesData.json";
import CategorieCard from "../../components/CategoryCard";
import { useParams, useNavigate, NavigateFunction } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

type RecipeKey = "title" | "category";

const Search = () => {
  const data: Recipe[] = recipesData.recipes;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Recipe[] | null>(null);
  const navigate: NavigateFunction = useNavigate();
  const { name } = useParams();

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

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchRecipe = (
    term: string,
    attribute: RecipeKey
  ): Recipe[] | null => {
    const filteredResults: Recipe[] | null = data.filter((item) =>
      item[attribute].toLowerCase().includes(term.toLowerCase())
    );
    return filteredResults;
  };

  const searchByCategory = (name: string): Recipe[] | null => {
    const filteredResults: Recipe[] | null = searchRecipe(name, "category");
    return filteredResults;
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      setSearchResults(searchRecipe(searchTerm, "title"));
    } else if (name) {
      setSearchResults(searchByCategory(name.split("-").join(" ")));
    } else {
      setSearchResults(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, name]);

  return (
    <Main>
      <Section>
        <SearchBarContent >
          <SearchBar
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleChangeInput}
            id="1"
          />
          <StyledIcon icon={"tabler:search"} inline />
          {searchTerm && (
            <StyledIcon
              icon={"ic:round-close"}
              inline
              onClick={() => setSearchTerm("")}
            />
          )}
        </SearchBarContent>
        {name && !searchTerm && (
          <FilterContent>
            <FilterItem>
              {name}
              <Icon
                icon={"ic:round-close"}
                inline
                onClick={() => navigate("/search")}
              ></Icon>
            </FilterItem>
          </FilterContent>
        )}
        <SearchResults>
          {searchTerm.length < 3 && !name ? (
            <CategoriesContent>
              <SubTitle>
                Navegue por <HighlightedText>categorias</HighlightedText>
              </SubTitle>
              <CategoriesContainer>
                {categoryData.map((item, index) => (
                  <StyledLink to={`/search/${getSlug(item.name)}`} key={index}>
                    <CategorieCard image={item.image} name={item.name} />
                  </StyledLink>
                ))}
              </CategoriesContainer>
            </CategoriesContent>
          ) : (
            searchResults &&
            (searchResults.length > 0 ? (
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
                    description={item.ingredients}
                  />
                </StyledLink>
              ))
            ) : (
              <ResponseSearch>
                Não foi possível encontrar a receita pesquisada.
              </ResponseSearch>
            ))
          )}
        </SearchResults>
      </Section>
    </Main>
  );
};

export default Search;
