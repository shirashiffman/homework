import React, {Component} from 'react';

export default class Recipe extends Component{
    constructor(props){
        super(props);
    }

    render(){
    return <h2>{this.props.recipe.recipeName}</h2>;
        
    }
}