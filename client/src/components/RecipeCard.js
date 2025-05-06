import React from 'react'
import './RecipeCard.css'
import RecipeSummary from './RecipeSummary';
import RecipeDetails from './RecipeDetails';

function RecipeCard({ recipe, onRandomize }) {
    if (!recipe) return <p>Loading…</p>;

    return (
        <div className='recipe-container'>
            <div>
                <RecipeSummary
                    img={"https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg"}
                    type={recipe.dishType}
                    difficulty={recipe.dishDifficulty}
                    prepTime={recipe.cookingTime}
                />
                <RecipeDetails
                    name={recipe.dishName}
                    description={recipe.quickDescription}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    link={"https://github.com/MichalWawro/Random-Dinner-Ideas"}
                    onRandomize={onRandomize}
                />
            </div>
        </div>
    )
}

export default RecipeCard;