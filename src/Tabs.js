import React from 'react';
import { useState } from "react";
import "./App.css";


function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <TabButton name="Name & HP" tabNum={1} currentState={toggleState} toggleTab={toggleTab} />
        <TabButton name="Boxer's Photo" tabNum={2} currentState={toggleState} toggleTab={toggleTab} />
        <TabButton name="Statistics" tabNum={3} currentState={toggleState} toggleTab={toggleTab} />
        <TabButton name="Attack1" tabNum={4} currentState={toggleState} toggleTab={toggleTab} />
        <TabButton name="Attack2" tabNum={5} currentState={toggleState} toggleTab={toggleTab} />
        <TabButton name="Match Ups" tabNum={6} currentState={toggleState} toggleTab={toggleTab} />
        <TabButton name="Footer" tabNum={7} currentState={toggleState} toggleTab={toggleTab} />
      </div>

      <div className="content-tabs">
        <Tab name="Name & HP" currentState={toggleState} tabNum={1}>
          <FormControl inputType="text" name="Boxer's Name" maxLength="17" updateProp={(e) => props.updateProp(e,"name")}  />
          <FormControl inputType="text" name="Boxer's Nickname" maxLength="32" updateProp={(e) => props.updateProp(e,"nickname")}/>
          <FormControl inputType="dropdown" name="HP" id="hp" options={["- Select -",30,40,50,60,70,80,90,100,110,120,130]} updateProp={props.updateProp}/>
        </Tab>
        <Tab name="Boxer's Photo" currentState={toggleState} tabNum={2}>
          <FormControl inputType="image" name="Boxer's Photo" id="boxer-photo" updateProp={props.updateProp}/>
        </Tab>
        <Tab name="Statistics" currentState={toggleState} tabNum={3}>
          <FormControlGroup name="Boxing Record">
            <FormControlSmall id="wins" name="Wins" updateProp={props.updateProp}/>
            <FormControlSmall id="losses" name="Losses" updateProp={props.updateProp}/>
            <FormControlSmall id="draws" name="Draws" updateProp={props.updateProp}/>
            <FormControlSmall id="wins-KO" name="KO Wins" updateProp={props.updateProp}/>
          </FormControlGroup>
          <FormControl inputType="dropdown" name="Weight" id="weight" options={["- Select -",102,105,108,112,115,118,122,126,130,135,140,147,154,160,168,175,200,"200+"]} updateProp={props.updateProp} />
          <FormControl inputType="dropdown" name="Height" id="height" options={["- Select -","5'0''","5'1''","5'2''","5'3''","5'4''","5'5''","5'6''","5'7''","5'8''","5'9''","5'10''","5'11''","6'0''","6'1''","6'2''","6'3''","6'4''","6'5''","6'6''","6'7''","6'8''","6'9''","6'10''","6'11''","7'0'"]} updateProp={props.updateProp} />
        </Tab>
        <Tab name="Attack1" currentState={toggleState} tabNum={4}>
          <FormControl inputType="text" name="Attack Name" id="attack1-name" maxLength="21" updateProp={(e) => props.updateProp(e,"attack1Name")} />
          <FormControl inputType="textArea" name="Attack Description" id="attack1-desc" maxLength="99" updateProp={(e) => props.updateProp(e,"attack1Desc")}/>
          <FormControl inputType="dropdown" name="Attack Energy Cost" id="attack1-cost" options={["- Select -","None",1,2,3,4]} updateProp={props.updateProp} />
          <FormControl inputType="dropdown" name="Damage" id="attack1-dmg" options={["- Select -","None",10,20,30,40,50,60,70,80,90,100,110,120]} updateProp={props.updateProp}/>
          <FormControl inputType="dropdown" name="Damage Modifier" id="attack1-mod" options={["- Select -","None","+","-","X"]} updateProp={props.updateProp}/>
        </Tab>
        <Tab name="Attack2" currentState={toggleState} tabNum={5}>
          <FormControl inputType="text" name="Attack Name" id="attack2-name" maxLength="21" updateProp={(e) => props.updateProp(e,"attack2Name")} />
          <FormControl inputType="textArea" name="Attack Description" id="attack2-desc" maxLength="99" updateProp={(e) => props.updateProp(e,"attack2Desc")}/>
          <FormControl inputType="dropdown" name="Attack Energy Cost" id="attack2-cost" options={["- Select -","None",1,2,3,4]} updateProp={props.updateProp} />
          <FormControl inputType="dropdown" name="Damage" id="attack2-dmg" options={["- Select -","None",10,20,30,40,50,60,70,80,90,100,110,120]} updateProp={props.updateProp}/>
          <FormControl inputType="dropdown" name="Damage Modifier" id="attack2-mod" options={["- Select -","None","+","-","X"]} updateProp={props.updateProp}/>
        </Tab>
        <Tab name="Match Ups" currentState={toggleState} tabNum={6}>
          <FormControl inputType="text" name="Looks good against this boxer" maxLength="17" updateProp={(e) => props.updateProp(e,"advantage1")}  />
          <FormControl inputType="text" name="And this boxer" maxLength="17" updateProp={(e) => props.updateProp(e,"advantage2")}  />
          <FormControl inputType="text" name="Looks bad against this boxer" maxLength="17" updateProp={(e) => props.updateProp(e,"weakness1")}  />
          <FormControl inputType="text" name="And this boxer" maxLength="17" updateProp={(e) => props.updateProp(e,"weakness2")}  />
        </Tab>
        <Tab name="Footer" currentState={toggleState} tabNum={7}>
          <FormControl inputType="textArea" name="Trivia" id="trivia" maxLength="120" updateProp={(e) => props.updateProp(e,"trivia")}/>
          <FormControl inputType="dropdown" name="Bottom-right icon" id="rarity" options={["- Select -","Circle/Journeyman, Prospect, Gatekeeper","Diamond/Contender, World Champion","Star/Elite World Champion, GOAT"]} updateProp={props.updateProp}/>
        </Tab>
        </div>
      </div>
  );
}

function camelizeId(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/-+/g, '');
}

class UploadButton extends React.Component {
  sendUploadToCard(e) {
    let file = document.querySelector("#upload").files[0];
    let reader = new FileReader();
    reader.onloadend = function(){
       document.querySelector('.boxer-photo').style.backgroundImage = "url(" + reader.result + ")";        
    }
    if(file){
       reader.readAsDataURL(file);
       this.props.updateProp(e,"img");
     }else{
     }
  }
  render() {
    return <input id="upload" type="file" onChange={(e) => this.sendUploadToCard(e)}/>
  }
}


class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this)

  }
  onButtonClick(e) {
    console.log(this);
    document.querySelector('.boxer-photo').style.backgroundPosition = this.props.value;
    this.props.updateProp(e,"imgPosition")
  }
  render() {
    return(
      <div className="radio-button">
          <input type="radio" id={this.props.id} name="position" value={this.props.value} onClick={(e) => this.onButtonClick(e)} defaultChecked={this.props.defaultChecked}/>
          <label htmlFor={this.props.id}>{this.props.value}</label>
      </div>
      )
  }
}

class Dropdown extends React.Component {
  generateOptions() {
    let options = [];
    for (let i = 0; i < this.props.options.length; i++) {
      let newOption = <option value={(this.props.options[i]==="None" || this.props.options[i]==="- Select -") ? '' : this.props.options[i]} key={this.props.options[i]}>{this.props.options[i]}</option>
      options.push(newOption);
    }
    return options;
  }
  render() {
    return(
      <select id={this.props.id} onChange={(e) => this.props.updateProp(e,camelizeId(this.props.id))}>
        {this.generateOptions()}
      </select>
    )
  }
}

class FormControl extends React.Component {
  generateId() {
    let id = this.props.id
    if (!id) { // If the component instance does not have an id, the function will generate one.
      id = this.props.name;
      id = id.replace("'",""); // Will do nothing if apostrolphe is not there.
      id = id.replace(" ","-");
      id = id.toLowerCase();
    }
    return id;
  }
  determineInput() {
    let theInput = "";
    switch (this.props.inputType) {
      case 'text':
        theInput = <input type="text" id={this.generateId()} onChange={this.props.updateProp} maxLength={this.props.maxLength}/>
        break;
      case 'textArea':
        theInput = <textarea rows="10" cols="33" id={this.generateId()} onChange={this.props.updateProp} maxLength={this.props.maxLength}></textarea>;
        break;
      case 'dropdown':
        theInput = <Dropdown id={this.generateId()} options={this.props.options} updateProp={this.props.updateProp} />
        break;
      case 'image':
        theInput = (
        <div className="img-uploader" id={this.generateId()}>
          <UploadButton updateProp={this.props.updateProp}/>
          <div className="img-position-controls">
              <RadioButton id="p-top" value="top" updateProp={this.props.updateProp}/>
              <RadioButton id="p-center" value="center" defaultChecked="true" updateProp={this.props.updateProp}/>
              <RadioButton id="p-bottom" value="bottom" updateProp={this.props.updateProp}/>
          </div>
          <small>* For large, wide photos, image positioning may have no effect.</small>
        </div>
        )
        break;
      default:
        console.log(`${this.props.name} Sorry, determineInput couldn't figure out the input`);
    }
    return theInput;
  }
  render() {
    return (
      <div className="form-control">
      <label className="form-control-label" htmlFor={this.generateId()} >{this.props.name}:</label>
      {this.determineInput()}
      </div>
    )
  }
}

class FormControlSmall extends FormControl {
  render() {
    return(
      <div className="form-control-sm">
      <label className="form-control-label" htmlFor={this.generateId()}>{this.props.name}:</label>
      <input type="number" id={this.generateId()} onChange={(e)=>this.props.updateProp(e,camelizeId(this.props.id))} />
      </div>
    )
  }
} 

function FormControlGroup(props) {
  return(
    <div className="form-control">
      <label className="form-control-label">{props.name}:</label>
      <div className="form-control-container">
        {props.children}
      </div>
	  </div>
  )
}

function Tab(props) {
  return(
  <div
    className={props.currentState === props.tabNum ? "content  active-content" : "content"}
  >
  <h2>{props.name}</h2>
  <hr />
  {props.children}
</div>

  )
}

function TabButton(props) {
  return(
    <button
    className={props.currentState === props.tabNum ? "tabs active-tabs" : "tabs"}
    onClick={() => props.toggleTab(props.tabNum)}
  >
    {props.name}
  </button>
  )
}

export default Tabs;