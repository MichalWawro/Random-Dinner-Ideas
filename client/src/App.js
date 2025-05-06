import React, { useEffect, useState } from 'react';
import RecipeCard from './components/RecipeCard';
import Options from './components/Options';
import Footer from './components/Footer';
import useRandomRecipe from './hooks/useRandomRecipe'
import './App.css';

function App() {
  const { recipe, loading, error, fetchRecipe } = useRandomRecipe();

  return (
    <div className="App">
      {error && <p className='error-message'>{error}</p>}

      {recipe ? (
        <RecipeCard recipe={recipe} onRandomize={fetchRecipe} />
      ) : (
        !loading && <p>No recipe loaded yet.</p>
      )}

      <Options />
      <Footer />
    </div>
  );
}

export default App;
