import { Link } from "react-router-dom";
import {
  Card,
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
}

function RecipeCard({ title, prepTime, servings }: RecipeCardProps) {
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
      formatedPrepTime += `${hour} ${hour === 1 ? "h" : "hs"}`;
    }

    if (min > 0) {
      formatedPrepTime += `${formatedPrepTime.length > 0 ? " e " : ""}${min} ${
        min === 1 ? "min" : "mins"
      }`;
    }

    return formatedPrepTime;
  };

  return (
    <Card>
      <CardImageContent>
        <CardImage src="https://media.istockphoto.com/id/104704117/pt/foto/placas-de-restaurante.jpg?s=612x612&w=0&k=20&c=M8Tsp4YRufFS-Pw_9yA8Ftg2T2dXdYQgkP1mcn-0DNo=" />
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
        <Link to={"/recipe"}>Ver receita</Link>
      </CardDescription>
    </Card>
  );
}

export default RecipeCard;
