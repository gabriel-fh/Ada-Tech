import { StyleSheetManager } from "styled-components";
import {
  CategoryContent,
  CategoryImage,
  CategoryName,
  RoundedImage,
} from "./CategoryCard.style";

function CategoryCard({ image, name }: { image: string; name: string }) {
  return (
    <CategoryContent>
      <CategoryImage>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== image}>
          <RoundedImage backgroundimage={image} />
        </StyleSheetManager>
      </CategoryImage>
      <CategoryName>{name}</CategoryName>
    </CategoryContent>
  );
}

export default CategoryCard;
