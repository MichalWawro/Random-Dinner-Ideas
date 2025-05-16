import React, { useState } from 'react';
import './App.css';

import Options from './components/Options';
import RecipeCard from './components/RecipeCard';
import Footer from './components/Footer';
import useRandomRecipe from './hooks/useRandomRecipe';

function App() {
  const { recipe, loading, error, fetchRecipe } = useRandomRecipe();

  const [filters, setFilters] = useState({
    difficulty: '',
    diet: '',
    time: '',
    type: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="App">
      <Options
        filters={filters}
        onChange={handleFilterChange}
        onFetch={fetchRecipe}
      />

      {error && <p className="error-message">{error}</p>}

      {!loading && !recipe && <p>No recipe loaded yet.</p>}

      {recipe && (
        <>
          <RecipeCard recipe={recipe} onFetch={() => fetchRecipe(filters)} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
