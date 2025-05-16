import React, { useMemo } from 'react'
import './RecipeDetails.css'

function RecipeDetails({ name, description, ingredients, instructions, link, onFetch }) {
    const parsedIngredients = useMemo(() => {
        try {
            return JSON.parse(ingredients);
        } catch {
            return [];
        }
    }, [ingredients]);

    const instructionSteps = useMemo(() => {
        return instructions?.split(/[\r\n]+/).filter(step => step.trim() !== '');
    }, [instructions]);

    return (
        <div className='recipe-info'>
            <h2 className="recipe-name">{name}</h2>

            <div className="recipe-details-container">
                <div className="recipe-description">
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
                <div className="recipe-ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        {parsedIngredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="recipe-instructions">
                <h3>Instructions</h3>
                <ol>
                    {instructionSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>

            <div className="recipe-link">
                <a href={link} target="_blank" rel="noreferrer">
                    View full recipe
                </a>
            </div>

            <button
                className="fetch-button"
                onClick={() => {
                    onFetch()
                    window.scrollTo(0, 0);
                }}>

                Get Random Recipe
            </button>
        </div>
    )
}

export default RecipeDetails;
