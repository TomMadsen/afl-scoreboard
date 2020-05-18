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

  // addScore = (i, delta, team, score) => {
  //   const val = eval(`this.state.${team}[${i}].${score} += ${delta}`)
  //   console.log(val)
  //   this.setState( {
  //       [score]: val
  //   })
  // }

  addScore = (i, delta, team, score) => {
    const newData = this.state[team].map((el,index) => {
        if(i=== index) {
            el[score] += delta;
            // el = { ...el , score }
        }
        return el
    })

    this.setState((prevState) => {
      return {
        ...prevState ,
        [team] : newData
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



  addHomePlayer = () => {

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
    </div>
  );
  }
}

export default App;
