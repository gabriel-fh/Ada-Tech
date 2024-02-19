import { formatPrepTime } from "../../utils/utils";
import {
  Card,
  CardDesc,
  CardDescription,
  CardImage,
  CardImageContent,
  CardInfo,
  CardSpan,
  CardTitle,
} from "./RecipeCard.style";
import { Icon } from "@iconify/react";

interface RecipeCardProps {
  title: string;
  prepTime: string;
  servings: string;
  image: string;
  description: string[];
}

function RecipeCard({
  title,
  prepTime,
  servings,
  image,
  description,
}: RecipeCardProps) {
  return (
    <Card>
      <CardImageContent>
        <CardImage src={image} alt={title} />
        <CardInfo>
          <CardSpan>
            <Icon icon="mingcute:time-fill" inline />
            {formatPrepTime(prepTime)}
          </CardSpan>
          <CardSpan>
            <Icon icon="streamline:serving-dome-solid" />
            {servings}
          </CardSpan>
        </CardInfo>
      </CardImageContent>
      <CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardDesc>
          {description.map((item, index) => (
            <span key={index}>{item}; </span>
          ))}
        </CardDesc>
      </CardDescription>
    </Card>
  );
}

export default RecipeCard;
