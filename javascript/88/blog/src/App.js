import './App.css';
import React, {Component} from 'react';
import { Route, Redirect, Switch, BrowserRouter, Link } from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';


// function App(){
  
//     return (
//      <div>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/users">
//             < Users />
//           </Route>
//           <Route path="/blogs/:userId">
//             <Posts />
//           </Route>
//           <Redirect to="/users" />
//         </Switch>
//       </BrowserRouter>
//       </div>
//     );
  
// }
function App() {
  return (
    <BrowserRouter>
      {/* <header>
         <h1>Blog Site</h1>
        <div id="HomeButtonDiv">
          <Link to="/users">
            <button id="homeLink">Home</button>
          </Link>
        </div> 
      </header> */}
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/posts/:userId">
          <Posts />
        </Route>
        <Redirect to="/users" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
