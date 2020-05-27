import React, {PureComponent} from 'react';
import {Consumer} from './Context'
import Counter from './Counter';

class Player extends PureComponent {
    render(){
      
      const {index, team} = this.props;
      return (
      <div className={"player_" + team}>
        <Consumer>
          {({actions, teams})=>{
            const currentPlayer = teams[team].players[index]
            const standardName = currentPlayer.name
            const shortenedName = standardName.substring(0, 30)
            
            return(
              <div className="player-stats">
                <span className="player-name">
                <button className="remove-player" onClick={()=>actions.removePlayer(currentPlayer.id, team)}>X</button>{standardName.length<30?standardName:shortenedName +'..'}</span>
                <p className="player-score">{currentPlayer.goals} goals, {currentPlayer.behinds} behinds</p>
              </div>
            )
          }}
        </Consumer>
        <Counter 
        team={team}
        index={index}
        />
      </div>
    )
  }
}

export default Player