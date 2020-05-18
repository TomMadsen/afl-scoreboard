import React, {Component} from 'react';

class Counter extends Component {
  render(){
    
    const {addScore, team, index} = this.props

    return (
    <div className="counter-box">
      <div className="counter">
        <span>GOALS</span>
        <div className="counter-tools">
          <button className="counter-action increment" onClick={()=>addScore(index, +1, team, 'goals')}>+</button>
          <button className="counter-action decrement" onClick={()=>addScore(index, -1, team, 'goals')}>-</button>
        </div>
      </div>
      <div className="counter">
        <span>BEHINDS</span>
        <div className="counter-tools">
          <button className="counter-action increment" onClick={()=>addScore(index, +1, team, 'behinds')}>+</button>
          <button className="counter-action decrement" onClick={()=>addScore(index, -1, team, 'behinds')}>-</button>
        </div>
      </div>
    </div>
  )
  }
  
  
}

export default Counter