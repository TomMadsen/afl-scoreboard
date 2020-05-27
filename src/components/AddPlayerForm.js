import React, {Component} from 'react'
import {Consumer} from './Context'

class AddPlayerForm extends Component {
  render(){
    return(
      <Consumer>
        {({actions})=>{
          const playerName = React.createRef();
          const handleSubmit = (e) => {
            e.preventDefault();
            const {teamChoice} = this.form;
            if (playerName.current.value !== ""){
              actions.addPlayer(teamChoice.value,playerName.current.value);
              e.currentTarget.reset();
            }
          }
          return(
            <form 
              onSubmit={handleSubmit}
              ref={form => this.form = form}>
                <input 
                type="text" 
                placeholder="Add a new player"
                ref={playerName}
                />
                <div className="team-select">
                  <h3>Team:</h3>
                  <label>
                    <input 
                    name="teamChoice"
                    type="radio" 
                    value="home_team"
                    />Home
                  </label>
                  <label>
                    <input
                    name="teamChoice" 
                    type="radio" 
                    value="away_team"/>
                    Away
                  </label> 
                </div>
                <input 
                type="submit" 
                value="Add Player" 
                />
              </form>
          )
        }}
      </Consumer>
      
    )

  }
}

export default AddPlayerForm