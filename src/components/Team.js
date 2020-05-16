import React from 'react';
import Player from './Player' 
import Stats from './Stats'

const Team = (props) => {

  const {homeTeam, awayTeam, addScore, removePlayer} = props
    return (
    <div className="team-board">
      <div className="team home-team">
        <h1 className="team-name">Home Team</h1>
        <Stats 
          team={homeTeam}
        />
        {homeTeam.map((player, i)=>
        <Player 
          name={player.name}
          goals={player.goals}
          behinds={player.behinds}
          id={player.id}
          key={player.id.toString()}
          addScore={addScore}
          removePlayer={removePlayer}
          index={i}
          team="home_team"
        />
        )}
      </div>
      <div className="team away-team">
        <h1 className="team-name">Away Team</h1>
        <Stats 
          team={awayTeam}
        />
        {awayTeam.map((player, i)=>
        <Player 
          name={player.name}
          goals={player.goals}
          behinds={player.behinds}
          id={player.id}
          key={player.id.toString()}
          addScore={addScore}
          removePlayer={removePlayer}
          index={i}
          team="away_team"
        />
        )}
      </div>
    </div>
  )
}

export default Team