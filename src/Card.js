import "./App.css";

function Card(props) {
  return (
    <div className="card">
        <NameHp name={props.data.name} nickname={props.data.nickname} hp={props.data.hp}/>
        <section className="boxer-photo"></section>
        <Measurements record={[props.data.wins,props.data.winsKO,props.data.losses,props.data.draws]}weight={props.data.weight} height={props.data.height}/>
        <section className="attacks">
        <Attack name={props.data.attack1Name} desc={props.data.attack1Desc} cost={props.data.attack1Cost} dmg={props.data.attack1Dmg} dmgMod={props.data.attack1Mod} />
        <Attack name={props.data.attack2Name} desc={props.data.attack2Desc} cost={props.data.attack2Cost} dmg={props.data.attack2Dmg} dmgMod={props.data.attack2Mod} />
        </section>
        <MatchUps advantage={[props.data.advantage1,props.data.advantage2]} weakness={[props.data.weakness1,props.data.weakness2]} />
        <Trivia text={props.data.trivia}/>
        <section className="card-footer">
        <p><strong>Card generator developed by Alex Chen.</strong> © 1995-2022 Nintendo, Creatures, GAMEFREAK.</p>
        <img className="rarity" src={setRarity(props.data.rarity)} alt="rarity"/>
        </section>
    </div>
  );
}

function NameHp(props) {
  return(
    <section className="name-hp">
    <div className="nickname">"{props.nickname}"</div>
    <h3 className="name">{props.name}</h3>
    <div className="hp">
      <h3>{props.hp} HP</h3>
      <img className="card-type" src="fighting_energy.png" alt="card-type"/>
    </div>
  </section>
  ) 
}

function Measurements(props) {
  return(
    <section className="measurements">
    Record: {props.record[0]}({props.record[1]})-{props.record[2]}-{props.record[3]}, Weight: {props.weight} lbs, Height: {props.height}
    </section>
  )
}

function MatchUps(props) {
  return(
    <section className="weakness-resistance">
    <div>
      <div><strong>advantage over:</strong></div>
      <div>{props.advantage[0]}<br/>{props.advantage[1]}</div>
    </div>
    <div>
      <div><strong>weakness:</strong></div>
      <div>{props.weakness[0]}<br/>{props.weakness[1]}</div>
    </div>
  </section>
  )
}

function addAttackEnergy(energyNum) {
  let container = [];
  for (let i = 0; i < energyNum; i++) {
    let attackEnergy = <img className="attack-energy" src="fighting_energy.png" alt="attack-energy" key={i} />
    container.push(attackEnergy);
  }
  return container;
}

function Attack(props) {
  return(
    <div className="attack">
    <div className="attack-cost">
      {addAttackEnergy(props.cost)}
    </div>
    <div className="attack-name-desc">
      <span className="attack-name">{props.name}:</span> {props.desc}
    </div>
   <div className="dmg">{props.dmg}{props.dmgMod}</div>
  </div>
  )
}


function Trivia(props) {
  return (
  <section className="trivia">
    <p>{props.text}</p>
  </section>)
}

function setRarity(rarity) {
  switch (rarity) {
    case 'Circle/Journeyman, Prospect, Gatekeeper':
      return "common.png";
    case 'Diamond/Contender, World Champion':
      return "uncommon.png"
    case 'Star/Elite World Champion, GOAT':
      return "rare.png"
    default:
      return 'common.png'
  }
}

export default Card;
