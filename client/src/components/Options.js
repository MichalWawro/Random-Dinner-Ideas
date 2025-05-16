import React from 'react';
import './Options.css';

function Options({ filters, onChange, onFetch }) {
  return (
    <div className="options-container">
      <div className="options left">
        <select name="difficulty"
          className="select-field"
          value={filters.difficulty}
          onChange={onChange}>
          <option value="">Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <select name="diet"
          className="select-field"
          value={filters.diet}
          onChange={onChange}>
          <option value="">Diet</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="carnivore">Carnivore</option>
        </select>
      </div>

      <button
        className="fetch-button"
        onClick={() => onFetch(filters)}>
        Get Random Recipe
      </button>

      <div className="options right">
        <select name="time"
          className="select-field"
          value={filters.time}
          onChange={onChange}>
          <option value="">Time</option>
          <option value="30">~30 min</option>
          <option value="60">~60 min</option>
          <option value="90">~90 min</option>
        </select>

        <select name="type"
          className="select-field"
          value={filters.type}
          onChange={onChange}>
          <option value="">Type</option>
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
          <option value="supper">Supper</option>
        </select>
      </div>
    </div>
  );
}

export default Options;
