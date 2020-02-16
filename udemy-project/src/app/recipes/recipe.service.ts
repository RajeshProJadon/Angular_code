import { Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from '../../../node_modules/rxjs';

@ Injectable()
export class RecipeService {
    recipesChanged = new Subject< Recipe[]>();
    recipeSelector = new EventEmitter< Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', '',
        [
            new Ingredient('meals', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', '',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Bread', 2)
        ])
      ];
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
        }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
