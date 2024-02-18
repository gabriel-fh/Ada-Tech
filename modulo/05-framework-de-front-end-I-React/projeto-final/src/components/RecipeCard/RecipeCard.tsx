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

const RecipeCard = ({ title, prepTime, servings, image }: RecipeCardProps) => {
  const formatPrepTime = (prepTime: string): string => {
    const splitedPrepTime: string[] = prepTime.split(" ");
    let hour: number = 0;
    let min: number = 0;

    for (let i = 0; i < splitedPrepTime.length; i++) {
      let value: number = 0;
      !isNaN(parseInt(splitedPrepTime[i], 10)) &&
        (value = parseInt(splitedPrepTime[i], 10));
      const part: string = splitedPrepTime[i + 1];

      if (part && part.includes("hora")) {
        hour += value;
      } else if (part && part.includes("min")) {
        min += value;
      }
    }

    let formatedPrepTime: string = "";

    if (hour > 0) {
      formatedPrepTime += `${hour}h`;
    }

    if (min > 0) {
      formatedPrepTime += `${formatedPrepTime.length > 0 ? " e " : ""}${min}min`;
    }

    return formatedPrepTime;
  };

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
          {/* <CardSpan>
          <Icon icon="iconamoon:category-fill" />
            Massa
          </CardSpan> */}
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
