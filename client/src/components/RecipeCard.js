import React from 'react'
import './RecipeCard.css'
import RecipeSummary from './RecipeSummary';
import RecipeDetails from './RecipeDetails';

function RecipeCard({ recipe, onFetch }) {
    if (!recipe) return <p>Loading…</p>;

    return (
        <div className='recipe-container'>
            <div>
                <RecipeSummary
                    img={recipe.imageUrl}
                    type={recipe.dishType}
                    difficulty={recipe.dishDifficulty}
                    prepTime={recipe.cookingTime}
                />
                <RecipeDetails
                    name={recipe.dishName}
                    description={recipe.quickDescription}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    link={recipe.link}
                    onFetch={onFetch}
                />
            </div>
        </div>
    )
}

export default RecipeCard;