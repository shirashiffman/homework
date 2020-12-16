
import './App.css';
import './Recipe.css';
import Recipe from './Recipe';
import React, {Component} from 'react';
import RecipeDetails from './RecipeDetails';

class App extends Component{

  state =  {
    selectedRecipeId: 1,
    recipes: [
      {
        id: 1,
        recipeName: "Meatballs",
        ingredients: [
          "Chopped Meat",
          "Spaghetti",
          "Sauce"
        ],
        directions: "Form meatballs, add to pot with sauce, simmer for one hour"
      },

      {
        id: 2,
        recipeName: "Shnitzel",
        ingredients: [
          "Chicken Cutles",
          "Mayonaise",
          "Cornflake Crumbs"
        ],
        directions: "Marinate chicken in mayo, coat in crumbs, bake 350 for 45 minutes"
      },
      {
        id: 3,
        recipeName: "Mac and Cheese",
        ingredients: [
          "Macaroni",
          "Cheese",
          "Milk"
        ],
        directions: "Boil pasta according to directions. Add cheese and milk to pot, stir to combine"
      }
    ]
  };

  displaySelected(){
    let selectedRecipe = this.state.recipes.find(recipe => recipe.id === this.state.selectedRecipeId);
    return  <RecipeDetails recipe = {this.state.recipes[0]} />;
  }

  render() {
    return (
      <div id="container">
        <div id = "list">
          <h1>Recipe List</h1>
          {this.state.recipes.map(recipe => <Recipe recipe ={recipe} key ={recipe.id} />)}
        </div>
        <div id = "details">
      
          {this.displaySelected()}
        </div>
      </div>
 
    )
    
  } 
}

export default App;
