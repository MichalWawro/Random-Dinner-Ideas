package com.example.server.service;

import com.example.server.model.Recipe;
import com.example.server.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;
    private final Random random = new Random();

    public Recipe getRandomFilteredRecipe(
            String difficulty,
            String diet,
            Integer maxTime,
            String mealType
    ) {
        List<Recipe> all = recipeRepository.findAll();

        List<Recipe> filtered = all.stream()
                .filter(r -> difficulty == null || difficulty.isBlank() ||
                        r.getDishDifficulty().equalsIgnoreCase(difficulty))
                .filter(r -> diet == null || diet.isBlank() ||
                        r.getDishType().equalsIgnoreCase(diet))
                .filter(r -> maxTime == null ||
                        r.getCookingTime() != null &&
                                r.getCookingTime() <= maxTime)
                .filter(r -> mealType == null || mealType.isBlank() ||
                        r.getMealType().equalsIgnoreCase(mealType))
                .collect(Collectors.toList());

        if (filtered.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No recipes match your filters");
        }

        return filtered.get(random.nextInt(filtered.size()));
    }
}
