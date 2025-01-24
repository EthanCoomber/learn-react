interface Recipe {
  id: string;
  name: string;
  ingredients: Set<string>;
}

export const recipes: Recipe[] = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

interface IngredientListProps {
  ingredients: Set<string>;
}

function IngredientList({ ingredients }: IngredientListProps) {
  return (
    <ul>
      {Array.from(ingredients).map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
}

interface RecipeCardProps {
  recipe: Recipe;
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <IngredientList ingredients={recipe.ingredients} />
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}