import './App.css';
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import AddRecipe from './AddRecipe.js';
// import BulletLessList from './BulletLessList';

import RecipeList from './RecipeList3';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <Header />
        <Switch>
          <Route path="/recipes">
            <RecipeList />
          </Route>
          {/*<Route path="/recipe/:recipeId" render={({ match }) => <RecipeDetails match={match} />} />*/}
          <Route path="/recipe/:recipeId">
            <RecipeDetails />
          </Route>
          <Route path="/addrecipe">
            < AddRecipe />
          </Route>
          <Redirect to="/recipes" />
        </Switch>
        <hr />
       
      </div>
    );
  }
}