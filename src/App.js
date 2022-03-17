import "./App.css";
import Tabs from './Tabs.js';
import Card from './Card.js';
import DLButton from './DLButton.js';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      name:'Manny Pacquiao',
      nickname:'Pac Man',
      hp:120,
      
      img:'pacquiao.jpg',
      imgPosition:'center',
      
      wins:68,
      winsKO:39,
      losses:8,
      draws:2,
      weight: 147,
      height:"5'6''",

      attack1Name:'Combination Punching',
      attack1Desc:'Flip a coin 4 times. This attack does 20 damage times the number of heads.',
      attack1Cost:3,
      attack1Dmg:'20',
      attack1Mod:'X',

      attack2Name:'Straight left',
      attack2Desc:'If the opposing boxer threw a jab, this attack does 10 more damage.',
      attack2Cost:2,
      attack2Dmg:'60',
      attack2Mod:'+',

      advantage1:"Marco Antonio Barrera",
      advantage2:"Ricky Hatton",
      weakness1:"Floyd Mayweather",
      weakness2: "Juan Manuel Marquez",

      trivia:'The Pride of the Philippines. When Pacquiao fights, the Philippines comes to a standstill.',
      rarity:'Star/Elite World Champion, GOAT',

      buttonCaption:''

    }
    this.updateProp = this.updateProp.bind(this);
    this.updatePropString = this.updatePropString.bind(this);
  }
  updateProp(e,prop) {
    this.setState({[prop]: e.target.value})
    this.updatePropString('',"buttonCaption")
  }
  // Alternative updateProp that does not involve the event object.
  updatePropString(value,prop) {
    this.setState({[prop]: value})
  }
  render() {
    return (
      <div className="App">
        <h1>Boxing Card Generator</h1>
        <main>
            <div>
              <Tabs updateProp={this.updateProp} />
              <DLButton data={this.state} updatePropString={this.updatePropString}/>
            </div>
            <Card data={this.state}/>
        </main>
      </div>
    )
  }
}

export default App;
