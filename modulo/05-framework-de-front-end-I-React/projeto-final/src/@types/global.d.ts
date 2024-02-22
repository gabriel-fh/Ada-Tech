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

interface ExtraInfo {
  condition: boolean | undefined;
  text: string;
  color: string;
  link?: string | null;
  icon?: string;
}
