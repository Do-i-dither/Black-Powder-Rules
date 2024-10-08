import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Define the path to your JSON file
  // Define the path to your JSON file using a relative path
  const filePath = path.resolve(process.cwd(), 'data/cavalryStats.json');
  
  // Read the JSON file
  const jsonData = fs.readFileSync(filePath);
  
  // Parse the JSON data
  const cavalryStats = JSON.parse(jsonData);
  
  // Access the correct path in the JSON structure
  const britishDragoonsCavalry = cavalryStats.Cavalry["Dragoons"]["British"];
  
  
  // Return the data as props
  return {
    props: {
      britishDragoonsCavalry
    }
  };
}

const DragoonsCavalryBritish = ({ britishDragoonsCavalry }) => {
  return (
    <div className="card">
      <h1>British Dragoons Cavalry</h1>
      <div className="divider"></div>
      
      <div className="cavalrySection">
        <h4>{britishDragoonsCavalry.Description}</h4>
        <div className="divider"></div>
        <div className="topRight">
          <div className="moraleContainer">
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className="moraleIcon" />
            <p className="iconText">{britishDragoonsCavalry.Morale}</p>
          </div>
          <div className="staminaContainer">
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className="staminaIcon" />
            <p className="iconText">{britishDragoonsCavalry.Stamina}</p>
          </div>
        </div>
        <div className="content">
          <div className="stats">
            <div className="headingWithIcon">
              <h2>Movement</h2>
              <img src="/images/icons/movementIcon.png" alt="Movement Icon" className="movementIcon" />
            </div>
            <p><b>Standard Movement:</b> {britishDragoonsCavalry.Movement["Standard Movement"]}</p>
            <p><b>Charge:</b> {britishDragoonsCavalry.Movement.Charge}</p>
            <p><b>Disordered:</b> {britishDragoonsCavalry.Movement.Disordered}</p>

            <div className="headingWithIcon">
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className="combatIcon" />
            </div>
            <p><b>Combat Value:</b> {britishDragoonsCavalry["Hand-to-Hand"]["Combat Value"]}</p>
            <p><b>Dismounted Combat Value :</b> {britishDragoonsCavalry["Hand-to-Hand"]["Combat Value (Dismounted)"]}</p>
            <p><b>Large Unit:</b> {britishDragoonsCavalry["Hand-to-Hand"].Modifiers["Large Unit"]}</p>
            <p><b>Small Unit:</b> {britishDragoonsCavalry["Hand-to-Hand"].Modifiers["Small Unit"]}</p>
            <p><b>Tiny Unit:</b> {britishDragoonsCavalry["Hand-to-Hand"].Modifiers["Tiny Unit"]}</p>

            <div className="headingWithIcon">
              <h2>Special Rule</h2>
              <img src="/images/icons/specialRuleIcon.png" alt="Special Rule Icon" className="specialRuleIcon" />
            </div>
            <p><b>Special Rule:</b> {britishDragoonsCavalry.SpecialRule}</p>
          </div>
          <div className="imageContainer">
            <img style={{width:400}} src="/images/cavalry/dragoons/british-dragoons.jpg" alt="British Dragoons Cavalry" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragoonsCavalryBritish;
