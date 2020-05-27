import React, {Component} from 'react'

const AppContext = React.createContext()
export const Consumer = AppContext.Consumer;
export class Provider extends Component {
  state = {
    home_team: {
      name: "Bombers",
      goals: 0,
      behinds: 0,
      players: [
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
      ]
    },
    away_team: {
      name: "Blues",
      goals: 0,
      behinds: 0,
      players: [
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
  }

  addScore = (index, delta, team, score) => {
    let newDetails = {...this.state[team]};
    newDetails[score] += delta;
    newDetails.players.map((player,i) => {
      if(index=== i) {
          player[score] += delta;
          // el = { ...el , score }
      }
      return player
    })
    this.setState(prevState=>{
        return{...prevState,
        [team]:newDetails}
      }
    )
  }


  removePlayer = (id, team) => {
    const newTeam = this.state[team].players.filter(player => player.id !== id)
    const newGoals = newTeam.reduce((tot, p)=>{return tot += p.goals},0)
    const newBehinds = newTeam.reduce((tot, p)=>{return tot += p.behinds},0)
    this.setState((prevState) => {
      return { ...prevState,
          [team]: {...prevState[team],
          players: newTeam,
          goals: newGoals,
          behinds: newBehinds
          }
    }})
  }



  addPlayer = (team, name) => {
    let currentHighId = Math.max.apply(Math, this.state[team].players.map(player=>player.id));
    let newId = () => currentHighId>0? currentHighId + 1 : 1;
    const newTeam = [
      ...this.state[team].players,
      {
        id: newId(),
        name,
        goals: 0,
        behinds: 0,
      }
    ]
    this.setState((prevState) => {
      return {
        ...prevState,
        [team]: {
          ...prevState[team],
          players: newTeam       
        }
      };
    })
  }

  render(){
    return(
      <AppContext.Provider
      value={{
        teams:{
          away_team:this.state.away_team,
          home_team:this.state.home_team
        },
        actions: {
          removePlayer:this.removePlayer,
          addScore:this.addScore,
          addPlayer:this.addPlayer,
        }
        
      }}
      >
      {this.props.children}  
      </AppContext.Provider>
    )
  }
}