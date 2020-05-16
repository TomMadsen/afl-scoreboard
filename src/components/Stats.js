import React from 'react'

const Stats = ({team}) => {

  let behinds = team.reduce( (total, player)=>{
    return total + player.behinds;
  }, 0)

  let goals = team.reduce( (total, player)=>{
    return total + player.goals;
  }, 0)

  let total = goals*6 + behinds;

  return(
    <div className="stats">
      <span className="team-score">{goals}.{behinds}.{total}</span>
    </div>
  )
}

export default Stats