import React, {Component} from 'react';

const fullQuarter = 1.2e+6;

class Timer extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
    qtrComp: false
  }

  componentDidMount(){
    this.intervalID = setInterval(()=>this.tick(), 100)
  }
  componentWillUnmount(){
    clearInterval(this.intervalID)
  }
  

  tick = () => {
    if(this.state.isRunning){
      const now = Date.now();
      this.setState(prev=>{
        return{
          previousTime: now,
          elapsedTime: prev.elapsedTime + (now - prev.previousTime)
        }
      })
      if(this.state.elapsedTime>=fullQuarter){this.toggleTimer();this.setState({qtrComp:true})} 
    }
    
  }

  toggleTimer = () => {
    this.setState(prev=>{
        return{isRunning: !prev.isRunning}
    })
    if(!this.state.isRunning){
      this.setState({
        previousTime: Date.now()
      })
    }
  }

  resetTimer = () => {
    this.setState({
      elapsedTime: 0,
      qtrComp: false,
    })
  }

  render(){
    return(
    <div className="timer">
      <h2>Timer{this.state.qtrComp?" - Qtr Time":""}</h2>
      <span className="timer-time">{Math.floor(this.state.elapsedTime/1000)}</span>
      <button onClick={this.toggleTimer}>{this.state.isRunning ? <>&#x23F8;</> : <>&#x23F5;</>}</button>
      <button onClick={this.resetTimer}>&#8634;</button>
    </div>
    )
  }
}

export default Timer;