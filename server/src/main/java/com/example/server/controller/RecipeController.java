package com.example.server.controller;

import com.example.server.model.Recipe;
import com.example.server.service.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;
    @GetMapping("/random")
    public Recipe getRandomRecipe(
            @RequestParam(required = false) String difficulty,
            @RequestParam(required = false) String diet,
            @RequestParam(required = false, name = "time") Integer maxTime,
            @RequestParam(required = false, name = "type") String mealType
    ) {
        try {
            return recipeService.getRandomFilteredRecipe(
                    difficulty, diet, maxTime, mealType
            );
        } catch (ResponseStatusException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed to fetch recipe", ex
            );
        }
    }
}
