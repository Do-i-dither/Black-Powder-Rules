import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Define the path to your JSON file
  const filePath = path.resolve(process.cwd(), 'data/cavalryStats.json');
  
  // Read the JSON file
  const jsonData = fs.readFileSync(filePath);
  
  // Parse the JSON data
  const cavalryStats = JSON.parse(jsonData);
  
  // Access the correct path in the JSON structure
  const britishLightCavalry = cavalryStats.Cavalry["Light Cavalry"].British;
  console.log(britishLightCavalry);
  
  // Return the data as props
  return {
    props: {
      britishLightCavalry
    }
  };
}

const LightCavalryBritish = ({ britishLightCavalry }) => {
  return (
    <div className="card">
      <h1>British Light Cavalry</h1>
      <div className="divider"></div>
      
      <div className="cavalrySection">
        <h4>{britishLightCavalry.Description}</h4>
        <div className="divider"></div>
        <div className="topRight">
          <div className="moraleContainer">
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className="moraleIcon" />
            <p className="iconText">{britishLightCavalry.Morale}</p>
          </div>
          <div className="staminaContainer">
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className="staminaIcon" />
            <p className="iconText">{britishLightCavalry.Stamina}</p>
          </div>
        </div>
        <div className="content">
          <div className="stats">
            <div className="headingWithIcon">
              <h2>Movement</h2>
              <img src="/images/icons/movementIcon.png" alt="Movement Icon" className="movementIcon" />
            </div>
            <p><b>Standard Movement:</b> {britishLightCavalry.Movement["Standard Movement"]}</p>
            <p><b>Charge:</b> {britishLightCavalry.Movement.Charge}</p>
            <p><b>Disordered:</b> {britishLightCavalry.Movement.Disordered}</p>

            <div className="headingWithIcon">
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className="combatIcon" />
            </div>
            <p><b>Combat Value:</b> {britishLightCavalry["Hand-to-Hand"]["Combat Value"]}</p>
            <p><b>Large Unit:</b> {britishLightCavalry["Hand-to-Hand"].Modifiers["Large Unit"]}</p>
            <p><b>Small Unit:</b> {britishLightCavalry["Hand-to-Hand"].Modifiers["Small Unit"]}</p>
            <p><b>Tiny Unit:</b> {britishLightCavalry["Hand-to-Hand"].Modifiers["Tiny Unit"]}</p>

            <div className="headingWithIcon">
              <h2>Special Rule</h2>
              <img src="/images/icons/specialRuleIcon.png" alt="Special Rule Icon" className="specialRuleIcon" />
            </div>
            <p><b>Special Rule:</b> {britishLightCavalry.SpecialRule}</p>
          </div>
          <div className="imageContainer">
            <img src="/images/cavalry/light-cavalry/british-light-cavalry.jpg" alt="British Light Cavalry" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightCavalryBritish;
