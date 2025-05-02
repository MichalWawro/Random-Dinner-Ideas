package com.example.server.repository;

import com.example.server.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    //add findByTitle(String title) etc. later
}
