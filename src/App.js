import React, {Component} from 'react';
import Header from './components/Header';
import Team from './components/Team';
import './app.css';

class App extends Component {
  state = {
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

  HighHomeId = Math.max.apply(Math, this.state.home_team.map(player=>player.id))
  HighAwayId = Math.max.apply(Math, this.state.away_team.map(player=>player.id))
  newId = () => this.HighHomeId>this.HighAwayId? this.HighHomeId + 1 : this.HighAwayId + 1;



  addScore = (i, delta, team, score) => {
    let key = 'score'
    let value = eval(`this.state.${team}[${i}].${score}s += ${delta}`)
    this.setState({[key]:value})
  }

  removePlayer = (id, team) => {
    let key = team
    let value = eval(`this.state.${team}.filter(p=>p.id!==${id})`)
    this.setState({[key]:value}) 
  }


  addHomePlayer = () => {

  }
  render(){
    return (
      
    <div className="App scoreboard">
      <Header title='AFL Home Scoreboard'/>
      <Team 
        calcGoals={this.calcGoals}
        calcBehinds={this.calcBehinds}
        calcScore={this.calcScore}
        awayTeam={this.state.away_team}
        homeTeam={this.state.home_team}
        removePlayer={this.removePlayer}
        addScore={this.addScore}
      />
    </div>
  );
  }
}

export default App;
