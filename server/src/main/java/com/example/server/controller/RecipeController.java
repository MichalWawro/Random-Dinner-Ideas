package com.example.server.controller;

import com.example.server.model.Recipe;
import com.example.server.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping("/get-random-dish")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public String testFetch() {
        List<Recipe> recipes = recipeRepository.findAll();
        if (!recipes.isEmpty()) {
            Recipe firstRecipe = recipes.get(0);
            System.out.println("Fetched recipe title: " + firstRecipe.getTitle());
            return firstRecipe.getTitle();
        }
        return "No recipes found.";
    }
}
