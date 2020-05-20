import React, {Component} from 'react';

class Counter extends Component {
  render(){
    
    const {addScore, team, index} = this.props

    return (
    <div className="counter-box">
      <div className="counter">
        <div className="counter-tools">
          <button className="counter-action increment" onClick={()=>addScore(index, +1, team, 'goals')}>
          <svg className="arrow arrow-up" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.74 27.97">
            <title>arrow-up</title>
            <path className="cls-1" d="M14.74,1.15a1.3,1.3,0,0,1,2.26,0l7,12.18,7,12.18a1.3,1.3,0,0,1-1.12,2H1.8a1.3,1.3,0,0,1-1.12-2l7-12.18Z"/>
            <path className="cls-2" d="M15.12,17.3V12.57h1.5V17.3h4.75v1.49H16.62v4.73h-1.5V18.79H10.36V17.3Z"/>
          </svg>
          </button>
          <button className="counter-action decrement" onClick={()=>addScore(index, -1, team, 'goals')}>
          <svg className="arrow arrow-down" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.74 27.97">
            <title>arrow-down</title>
            <path className="cls-1" d="M17,26.82a1.31,1.31,0,0,1-2.26,0l-7-12.19L.68,2.45A1.3,1.3,0,0,1,1.8.5H29.94a1.3,1.3,0,0,1,1.12,2L24,14.63Z" transform="translate(0)"/>
            <path className="cls-2" d="M11.23,8.63h9.28v2.06H11.23Z" transform="translate(0)"/>
          </svg>
          </button>
        </div>
        <span>GOALS</span>
      </div>
      <div className="counter">
        <div className="counter-tools">
          <button className="counter-action increment" onClick={()=>addScore(index, +1, team, 'behinds')}>
          <svg className="arrow arrow-up" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.74 27.97">
            <title>arrow-up</title>
            <path className="cls-1" d="M14.74,1.15a1.3,1.3,0,0,1,2.26,0l7,12.18,7,12.18a1.3,1.3,0,0,1-1.12,2H1.8a1.3,1.3,0,0,1-1.12-2l7-12.18Z"/>
            <path className="cls-2" d="M15.12,17.3V12.57h1.5V17.3h4.75v1.49H16.62v4.73h-1.5V18.79H10.36V17.3Z"/>
          </svg>
          </button>
          <button className="counter-action decrement" onClick={()=>addScore(index, -1, team, 'behinds')}>
          <svg className="arrow arrow-down" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.74 27.97">
            <title>arrow-down</title>
            <path className="cls-1" d="M17,26.82a1.31,1.31,0,0,1-2.26,0l-7-12.19L.68,2.45A1.3,1.3,0,0,1,1.8.5H29.94a1.3,1.3,0,0,1,1.12,2L24,14.63Z" transform="translate(0)"/>
            <path className="cls-2" d="M11.23,8.63h9.28v2.06H11.23Z" transform="translate(0)"/>
          </svg>
          </button>
        </div>
        <span>BEHINDS</span>
      </div>
    </div>
  )
  }
  
  
}

export default Counter