import './App.css';
import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';


export default function Recipes(props) {

    return(
        <ul className="bulletlessList">
        {props.recipes.map(r => (
          <li key={r.id} onClick={()=>props.setSelected(r)}>
            {r.name}
          </li>))}
      </ul >
    )

}