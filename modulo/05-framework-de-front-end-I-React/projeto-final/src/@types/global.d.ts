interface Recipes {
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
