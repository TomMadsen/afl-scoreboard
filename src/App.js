import React, {Component} from 'react';
import Header from './components/Header';
import Team from './components/Team';
import AddPlayerForm from './components/AddPlayerForm'
import './app.css';

class App extends Component {
  state = {
      home_score:{
        goals:0,
        behinds:0,
      },
      away_score:{
        goals:0,
        behinds:0,
      },
      home_team: [
        {
          id: 1,
          name: "Jobe Watson",
          goals: 0,
          behinds: 0,
        },
        {
          id: 2,
          name: "James Hird",
          goals: 0,
          behinds: 0,
        },
        {
          id: 3,
          name: "Steven Alessio",
          goals: 0,
          behinds: 0,
        },
        {
          id: 4,
          name: "Che Cockatoo-Collins",
          goals: 0,
          behinds: 0,
        }
      ],
      away_team: [
        {
          id: 1,
          name: "Chris Judd",
          goals: 0,
          behinds: 0,
        },
        {
          id: 2,
          name: "Anthony Koudafidis",
          goals: 0,
          behinds: 0,
        },
        {
          id: 3,
          name: "Steven Silvagni",
          goals: 0,
          behinds: 0,
        },
        {
          id: 4,
          name: "Brendan Fevola",
          goals: 0,
          behinds: 0,
        },
      ]
  }

  addScore = (index, delta, team, score) => {
    const teamScore = team==="home_team"?"home_score":"away_score";
    let upDatedScore = {...this.state[teamScore][score]};
    upDatedScore[score] += delta;
    const upDated = this.state[team].map((el,i) => {
      if(index=== i) {
          el[score] += delta;
          // el = { ...el , score }
      }
      return el
    })
    this.setState((prevState) => {
      return {
        ...prevState ,
        [team] : upDated,
        [teamScore]:upDatedScore
      }
    })
  }
  

  removePlayer = (id, team) => {
    const newTeam = this.state[team].filter(player => player.id !== id)
    this.setState((prevState) => {
      return {
        ...prevState,
        [team]: newTeam
      };
    })
  }



  addPlayer = (team, name) => {
    
    let HighId = Math.max.apply(Math, this.state[team].map(player=>player.id))
    const newTeam = [
      ...this.state[team],
      {
        id: HighId + 1,
        name,
        goals: 0,
        behinds: 0,
      }
    ]
    this.setState((prevState) => {
      return {
          ...prevState,
          [team]: newTeam        
      };
    })
  }


  render(){
    return (
      
    <div className="App scoreboard">
      <Header title='AFL Home Scoreboard'/>
      <Team 
        away_team={this.state.away_team}
        home_team={this.state.home_team}
        removePlayer={this.removePlayer}
        addScore={this.addScore}
      />
      <AddPlayerForm 
        addPlayer={this.addPlayer}
      />
    </div>
  );
  }
}

export default App;
