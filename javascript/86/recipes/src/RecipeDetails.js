import './RecipeDetails.css';
import React, { useState, useEffect } from 'react'
import BulletLessList from './BulletLessList';

export default function RecipeDetails (props){
 

  const [imageShowing, setImageShowing] = useState(true);

  function togglePicture(){
    setImageShowing(!imageShowing);
  }



  function getPictureElem(picture, name) {
    
      if (imageShowing) {
        return <img className="img-fluid img-thumbnail img" src={picture} alt={name} />
      }
      return null;
  }

    // useEffect(()=>{

    // }, imageShowing)

   

    const { name, ingredients, directions, picture } = props.recipe;

   
    const text = imageShowing ? 'hide' : 'show';

    return (
      <div>
        <h2>{name}</h2>
        {getPictureElem(picture, name)}
        <br/>
        <button onClick={togglePicture}>
          {text} picture
        </button>
        <h3>ingredients</h3>
        <BulletLessList list={ingredients} />
        <h3>directions</h3>
        <BulletLessList list={directions} />
      </div>
    )
  
}
