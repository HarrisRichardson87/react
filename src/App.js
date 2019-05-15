import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import DummyData from './DummyData';
import CountryInput from './CountryInput';

class App extends Component {
  state = {
   name:"New User",
   country:"Country of Origin"
  }
  newUserName = (event) =>{
    this.setState(
      {name:event.target.value});
  }
  newCountryName = (event) => {
     this.setState({
       country:event.target.value
     });
   }
  render() {
    return (
      <div className="App">
      <h1>Card Maker</h1>
        <UserInput change={this.newUserName} currentName={this.state.name} />
        <CountryInput change={this.newCountryName} currentCountry={this.state.country}/>
        <UserOutput name={this.state.name}
        country={this.state.country}/>
        <DummyData name="Andrea"
        country="Venezuela"/>
       </div>
    );
  }
}

export default App;
