import { formatPrepTime } from "../../utils/utils";
import {
  Card,
  CardDescription,
  CardImage,
  CardImageContent,
  CardInfo,
  CardSpan,
  CardTitle,
  FakeLink,
} from "./RecipeCard.style";
import { Icon } from "@iconify/react";

interface RecipeCardProps {
  title: string;
  prepTime: string;
  servings: string;
  image: string;
}

function RecipeCard({ title, prepTime, servings, image }: RecipeCardProps) {
  

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
        <FakeLink>Ver receita</FakeLink>
      </CardDescription>
    </Card>
  );
}

export default RecipeCard;
