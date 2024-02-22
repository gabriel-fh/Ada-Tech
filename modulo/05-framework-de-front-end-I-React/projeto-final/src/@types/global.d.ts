interface Recipe {
  id: number;
  title: string;
  category: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  servings: string;
  vegetarian: boolean;
  glutenFree: boolean;
  videoUrl?: string | null;
}

interface RecipeCardProps {
  title: string;
  prepTime: string;
  servings: string;
  image: string;
  description: string[];
}

interface ExtraInfo {
  condition: boolean | undefined;
  text: string;
  color: string;
  link?: string | null;
  icon?: string;
}
