import React from 'react';
import {Consumer} from './Context'
import Player from './Player' 
import Stats from './Stats'


//  USING OBJECT.KEYS() AS AN OBJECT ITERATOR
const Team = () => {
  return (
    <Consumer>
      {({teams})=>{
        return(
          <div className="team-board">
            {
              Object.keys(teams).reverse().map((team, i) => 
                <div className={"team " + team}>
                  <h1 className={team}>{team.replace("_"," ").toUpperCase()}</h1>
                  <Stats 
                    team={teams[team].players}
                  />
                  {teams[team].players.map((player, i)=>
                  <Player 
                    name={player.name}
                    goals={player.goals}
                    behinds={player.behinds}
                    id={player.id} 
                    key={player.id.toString()}
                    index={i}
                    team={team}
                  />
                  )}
                </div>
              )
            }
          </div>
        )
      }}
    </Consumer>
  )
}



////  USING OBJECT.ENTRIES() AS AN OBJECT ITERATOR
// const Team = () => {
//   return (
//     <Consumer>
//       {({teams})=>{
//         return(
//           <div className="team-board">
//             {
//               Object.entries(teams).reverse().map(([team, value]) => 
//                   <div className={"team " + team}>
//                     <h1 className={team}>{team.replace("_"," ").toUpperCase()}</h1>
//                     <Stats 
//                       team={value.players}
//                     />
//                     {value.players.map((player, i)=>
//                     <Player 
//                       name={player.name}
//                       goals={player.goals}
//                       behinds={player.behinds}
//                       id={player.id}
//                       key={player.id.toString()}
//                       index={i}
//                       team={team}
//                     />
//                     )}
//                   </div>
//               )
//             }
//           </div>
//         )
//       }}
//     </Consumer>
//   )
// }


// const Team = () => {
//     return (
//       <Consumer>
//         {({teams})=>{
//           return(
//             <div className="team-board">
//               <div className="team home-team">
//                 <h1 className="team-name">Home Team</h1>
//                 <Stats 
//                   team={teams.home_team.players}
//                 />
//                 {teams.home_team.players.map((player, i)=>
//                 <Player 
//                   name={player.name}
//                   goals={player.goals}
//                   behinds={player.behinds}
//                   id={player.id}
//                   key={player.id.toString()}
//                   index={i}
//                   team="home_team"
//                 />
//                 )}
//               </div>
//               <div className="team away-team">
//                 <h1 className="team-name">Away Team</h1>
//                 <Stats 
//                   team={teams.away_team.players}
//                 />
//                 {teams.away_team.players.map((player, i)=>
//                 <Player 
//                   name={player.name}
//                   goals={player.goals}
//                   behinds={player.behinds}
//                   id={player.id}
//                   key={player.id.toString()}
//                   index={i}
//                   team="away_team"
//                 />
//                 )}
//               </div>
//             </div>
//           )
//         }}
//       </Consumer>
        
//   )
// }

export default Team