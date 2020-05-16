import React, {Component} from 'react';

class Counter extends Component {
  render(){
    
    const {addScore, index, team} = this.props

    return (
    <div className="counter-box">
      <div className="counter">
        <span>GOALS</span>
        <div className="counter-tools">
          <button className="counter-action increment" onClick={()=>addScore(index, +1, team, 'goal')}>+</button>
          <button className="counter-action decrement" onClick={()=>addScore(index, -1, team, 'goal')}>-</button>
        </div>
      </div>
      <div className="counter">
        <span>BEHINDS</span>
        <div className="counter-tools">
          <button className="counter-action increment" onClick={()=>addScore(index, +1, team, 'behind')}>+</button>
          <button className="counter-action decrement" onClick={()=>addScore(index, -1, team, 'behind')}>-</button>
        </div>
      </div>
    </div>
  )
  }
  
  
}

export default Counter