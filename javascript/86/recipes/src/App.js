import './App.css';
import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
// import BulletLessList from './BulletLessList';
import ClickCounter from './ClickCounter';
import Recipes from './Recipes';

export default function App() {

 
    const recipesArray = [
      {
        id: 1,
        name: 'hard boiled eggs',
        ingredients: ['eggs', 'water', 'salt'],
        directions: ['boil water', 'add eggs', 'salt to taste'],
        picture: 'https://hips.hearstapps.com/delish/assets/18/08/1519321899-hard-boiled-eggs-horizontal.jpg'
      },
      {
        id: 2,
        name: 'steak',
        ingredients: ['steak', 'barbeque sauce'],
        directions: ['marinate steak', 'grill for 8 minutes'],
        picture: 'https://www.omahasteaks.com/gifs/990x594/prfm7a.jpg'
      }
    ];

    const [recipes, setRecipes] = useState(recipesArray);
    const [selectedRecipe, setSelected] = useState(recipes[0]);

 

  return(
       <div className="container text-center">
        <h1>PCS Recipes</h1>
        <hr />
        < Recipes recipes = {recipes} setSelected = {setSelected}/>

        <hr />
        <RecipeDetails recipe={selectedRecipe} />
        <hr />
 
      </div>
    
  )
}