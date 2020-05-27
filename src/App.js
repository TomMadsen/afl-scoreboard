import React from 'react';
import Header from './components/Header';
import Team from './components/Team';
import AddPlayerForm from './components/AddPlayerForm'
import './app.css';

const App = () => {
    return (
    <div className="App scoreboard">
      <Header title='AFL Home Scoreboard'/>
      <Team />
      <AddPlayerForm />
    </div>
  );
}

export default App;
