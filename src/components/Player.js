import React, {PureComponent} from 'react';
import Counter from './Counter';

class Player extends PureComponent {
    render(){
      const {removePlayer, name, goals, behinds, addScore, addBehind, addGoal, index, team, id} = this.props
      const shortenedName = name.substring(0, 15);
      return (
    <div className="player">
      <div className="player-stats">
        <span className="player-name">
        <button className="remove-player" onClick={()=>removePlayer(id, team)}>X</button>{name.length<15?name:shortenedName+'..'}</span>
        <p className="player-score">{goals} goals, {behinds} behinds</p>
      </div>
      <Counter 
      team={team}
      index={index}
      addGoal={addGoal}
      addBehind={addBehind}
      addScore={addScore}
      />
    </div>
    )
  }
}

export default Player