import { useState, useEffect, useCallback } from 'react';

function useRandomRecipe() {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRecipe = useCallback(async (filters = {}) => {
        setLoading(true);
        setError(null);

        try {
            const params = new URLSearchParams();
            Object.entries(filters).forEach(([k, v]) => {
                if (v) params.append(k, v);
            });

            const url = params.toString()
                ? `http://localhost:8080/api/recipes/random?${params}`
                : 'http://localhost:8080/api/recipes/random';

            const response = await fetch(url);
            if (!response.ok) throw new Error(response.statusText);

            const data = await response.json();
            setRecipe(data);
            console.log(data);
        } catch (err) {
            setError(err.message);
        } finally {

            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchRecipe(); }, [fetchRecipe]);

    return { recipe, loading, error, fetchRecipe };
}

export default useRandomRecipe;
