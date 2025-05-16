package com.example.server.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String dish_name;
    private String dish_type;
    private String meal_type;
    private String dish_difficulty;
    private Integer cooking_time;
    private String quick_description;
    private String ingredients;
    private String instructions;
    private String link;
    private String imageUrl;
    @Column(name = "created_at")
    private java.time.LocalDateTime createdAt;

    public Long getId() {
        return id;
    }

    public String getDishName() {
        return dish_name;
    }

    public String getDishType() {
        return dish_type;
    }

    public String getMealType() {
        return meal_type;
    }

    public String getDishDifficulty() {
        return dish_difficulty;
    }

    public Integer getCookingTime() {
        return cooking_time;
    }

    public String getQuickDescription() {
        return quick_description;
    }

    public String getIngredients() {
        return ingredients;
    }

    public String getInstructions() {
        return instructions;
    }

    public String getLink() {
        return link;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setTitle(String title) {
        this.dish_name = title;
    }
}
