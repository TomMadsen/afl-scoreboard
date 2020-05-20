import React, {PureComponent} from 'react';
import Counter from './Counter';

class Player extends PureComponent {
    render(){
      
      const {removePlayer, name, goals, behinds, addScore, index, team, id} = this.props;
      const shortenedName = name.substring(0, 30);
      return (
    <div className={"player_" + team}>
      <div className="player-stats">
        <span className="player-name">
        <button className="remove-player" onClick={()=>removePlayer(id, team)}>X</button>{name.length<30?name:shortenedName+'..'}</span>
        <p className="player-score">{goals} goals, {behinds} behinds</p>
      </div>
      <Counter 
      team={team}
      index={index}
      addScore={addScore}
      />
    </div>
    )
  }
}

export default Player