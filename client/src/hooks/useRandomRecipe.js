import { useState, useEffect } from 'react';

function useRandomRecipe() {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecipe();
    }, []);

    const fetchRecipe = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:8080/api/get-random-dish');
            const data = await response.json();
            console.log(data);
            setRecipe(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { recipe, loading, error, fetchRecipe };
}

export default useRandomRecipe;
