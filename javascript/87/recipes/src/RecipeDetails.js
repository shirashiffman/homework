import './RecipeDetails.css';
import React, { useState, useEffect } from 'react'
import BulletLessList from './BulletLessList';
import { withRouter, Link, useParams } from 'react-router-dom';

export default function RecipeDetails () {
  

  const [imageShowing, setImageShowing] = useState(true);
  const [recipeName, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  const [image, setImage] = useState("");
  const {recipeId} = useParams();

  let recipeDetails = undefined;
  
  async function loadRecipe() {

      try {
        const response = await fetch(`/data/${recipeId}.json`);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        recipeDetails = await response.json();
        setRecipe(recipeDetails.name);
        setIngredients(recipeDetails.ingredients);
        setDirections(recipeDetails.directions);
        setImage(recipeDetails.picture);
      } catch (err) {
        console.error(err);
      }

}
 
  useEffect(()=>{
    loadRecipe()
  }, [recipeId]);

 


  function togglePicture() {
    setImageShowing(!imageShowing);
  }

  function getPictureElem(picture, name) {
    if (imageShowing) {
      return <img className="img-fluid img-thumbnail img" src={picture} alt={name} />
    }
    return null;
  }

  // if (!recipeDetails) {
  //     return null;
  // }
 // const { name, ingredients, directions, picture } = recipe;

    const text = imageShowing ? 'hide' : 'show';

    return(
      <div>
        <h2>{recipeName}</h2>
        {getPictureElem(image, recipeName)}
        <br />
        <button onClick={togglePicture}>
          {text} image
        </button>
        <h3>ingredients</h3>
        <BulletLessList list={ingredients} />
        <h3>directions</h3>
        <BulletLessList list={directions} />

        {/* <Link to='/recipe/1'>Recipe 1</Link> */}
      </div>
   )

    
}

