import React from 'react';
import './RecipeSummary.css';

import meatIcon from '../resources/leg-icon.png';
import leavesIcon from '../resources/leaves-icon.png';
import fishIcon from '../resources/fish-icon.png';
import easyIcon from '../resources/difficulty-easy-icon.png';
import mediumIcon from '../resources/difficulty-medium-icon.png';
import hardIcon from '../resources/difficulty-hard-icon.png';
import timeIcon from '../resources/time-icon.png';

function RecipeSummary({ img, type, difficulty, prepTime }) {
    return (
        <div className='recipe-summary'>
            <div className='recipe-image-container'>
                <img className="recipe-image" src={img} alt="Dish" loading="lazy" />
            </div>
            <div className='recipe-meta-container'>
                <div className="icon-wrapper">
                    <img className="icon" src={type === "vegetarian" ? leavesIcon : type === "pescetarian" ? fishIcon : meatIcon} alt="food-type-icon" />
                    <p className="icon-label">{type}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={difficulty === "easy" ? easyIcon : difficulty === "medium" ? mediumIcon : hardIcon} alt="difficulty-icon" />
                    <p className="icon-label">{difficulty}</p>
                </div>
                <div className="icon-wrapper">
                    <img className="icon" src={timeIcon} alt="time-icon" />
                    <p className="icon-label">{prepTime} min</p>
                </div>
            </div>

        </div>
    )
}

export default RecipeSummary;