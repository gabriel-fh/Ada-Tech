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

function RecipeCard({ title, prepTime, servings}: RecipeCardProps ) {
  return (
    <Card>
      <CardImageContent>
        <CardImage src="https://media.istockphoto.com/id/104704117/pt/foto/placas-de-restaurante.jpg?s=612x612&w=0&k=20&c=M8Tsp4YRufFS-Pw_9yA8Ftg2T2dXdYQgkP1mcn-0DNo=" />
        <CardInfo>
          <CardSpan>
            <Icon icon="mingcute:time-fill" inline />
            {prepTime}
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
        <Link to={'/recipe'}>Ver receita</Link>
      </CardDescription>
    </Card>
  );
}

export default RecipeCard;
