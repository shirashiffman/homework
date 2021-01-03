import './addRecipe.css';
import React, { useState, useEffect } from 'react'
//import { withRouter, Link, useParams } from 'react-router-dom';

export default function AddRecipe () {

    function handleSubmit(e){
        e.preventDefault();
        console.log('recipe submitted');
    }

    return(
        <form>
            Recipe Name: <input name = "name" type ="text"></input><br/>
            Ingredients: <input name = "ingredients" type ="text"></input><br/>
            Directions: <input name = "directions" type ="text"></input><br/>
            Image Url: <input name = "image" type ="text"></input><br/>
            <button onClick = {handleSubmit} >Submit</button>
        </form>
    )
}