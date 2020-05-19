import React, {Component} from 'react'

class AddPlayerForm extends Component {

  playerName = React.createRef();
  

  handleSubmit = (e) => {
    e.preventDefault();
    const {teamChoice} = this.form;
    if (this.playerName.current.value !== ""){
      this.props.addPlayer(teamChoice.value,this.playerName.current.value);
      e.currentTarget.reset();
    }
  }

  render(){
    return(
      <form 
      onSubmit={this.handleSubmit}
      ref={form => this.form = form}>
      >
        <input 
        type="text" 
        placeholder="Add a new player"
        ref={this.playerName}
        />
        <div class="team-select">
          <h3>Team:</h3>
          <label>
            <input 
            name="teamChoice"
            type="radio" 
            value="home_team"
            />Home
          </label>
          <label>
            <input
            name="teamChoice" 
            type="radio" 
            value="away_team"/>
            Away
          </label> 
        </div>
        <input 
        type="submit" 
        value="Add Player" 
        />
      </form>
    )

  }
}

export default AddPlayerForm