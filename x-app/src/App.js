import React from 'react'
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import TodoPage from './components/TodoPage';


function App() {
  return (

    <div className="App ">

      <header className="App-header">

        <nav className="justify-content-center">
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/todolist'>TodoList</Link>
        </nav>



      </header>

      <main>
        
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/todolist" component={TodoPage} />
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
       
      </main>

    </div>

  );
}

export default App;
