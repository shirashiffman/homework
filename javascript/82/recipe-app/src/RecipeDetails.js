import React, {Component} from 'react';

export default class RecipeDetails extends Component{
    constructor(props){
        super(props);
        console.log(this)
    }

    render(){
        return (
            <div>
                <h1>{this.props.recipe.recipeName}</h1>
                <h2>Ingredients</h2>
                {this.props.recipe.ingredients.map(ingredient => <h3>{ingredient}</h3>)}
                <h2>How to Cook</h2>
                <h3>{this.props.recipe.directions}</h3>
            </div>
        )
        
    }
}