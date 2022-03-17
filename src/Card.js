import "./App.css";
// Due to CORS and a bug with the image rendering library (html2canvas), all images had to called in base64.
let fightingEnergyPNG = "data:image/png;base64,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"
let circlePNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlFHiIAAAAAl0Uk5TAAJDpdZl8/9mh0kKOwAAAC9JREFUeJxjYFR2MRJgEE0vLwtkUCsvL09iMAeSxQzuQLIESkJEILISQJWNDGBdAPvAETSCLq7jAAAAAElFTkSuQmCC"
let diamondPNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAq4SsmwAAABh0Uk5TAAaGivyJg/r/+4GCafdrAvLzbl5gbWVnnWZTUAAAAExJREFUeJwlzEsWgCAMQ9EUi6JYIn73v1MLZHRPBg8AJARBn0yqsVvmJaV1c0t0uf3Pmvo0Y7dBK2A5mupJgJe73mwJFrOHI8z3a/oBdxsC1MwZZ1AAAAAASUVORK5CYII="
let starPNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAM9QTFRFAAAAS1FLSU9JVVNLXVhPS09IS1BIRkQ+X1xUIyMgP0E4JCMgZWdgLS0oLCwoJyckKionQUE5GhoXGBgVVldRTk9JJiYiNTUvYWNaQEI8AAAABAQDAAAAAQEBAwMDAAAAIiIeYWRYYmNbbW9mYWRdDAwKAAAAAAAAAAEBP0A5bm9jX2JWZ2peMTErCQoIWltRU1ZLExMRKiklMjMvBAQDRkhAZWhbVFZMISEcS0pCUVJMOTk1T09KcXFqYGJWW11RSko/R0Y/a2tjZmRfR0VFwKqQLgAAAEV0Uk5TAAInNREEQ1ocAoixMgIdJSImw+1eHCcfVY7w6/n+8PG7XgoefvL+//+wNgslt+daKt7MvO52CUy3SjWbhRURSV4GQFwmPhSCwQAAAGZJREFUeJxjYGBgYGRiZmGAAFY2dg4QzQnEXNw8DAy8DHz8AoJCwiKiYuIMEpJS0jKycvIKigxKyiqqauoamlraQJU6uurqevpgAwwMjYxNTEEsM3MLSytrG1sg087ewZHBydmFAQBO6Ql5n7H85QAAAABJRU5ErkJggg=="

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
        {<img className="rarity" src={setRarity(props.data.rarity)} alt="rarity"/>}
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
      <img className="card-type" src={fightingEnergyPNG} alt="card-type"/>
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
    let attackEnergy = <img className="attack-energy" src={fightingEnergyPNG} alt="attack-energy" key={i} />
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
      return circlePNG;
    case 'Diamond/Contender, World Champion':
      return diamondPNG
    case 'Star/Elite World Champion, GOAT':
      return starPNG
    default:
      return starPNG
  }
}

export default Card;
