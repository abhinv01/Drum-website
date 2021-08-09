import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
// import Pad from "./Pad";



const audioclips = 
 [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];






function App() {
  return (<>
    <div className="bg-info min-vh-100 text-white">
      <div classname = "text-center">
        <h2 className = "text-center">Drum Machine</h2>
        <div style = {{display:"flex",justifyContent:"space-around",flexFlow:"row wrap" ,marginTop:"40vh"}}>
          {audioclips.map(clip => {
            return <Pad key = {clip.id} clip = {clip} />
          })}
        </div>
      </div>
    </div>
    </>
  );
}




function Pad({clip}) {

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return 
}, []);

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger)
    audioTag.currentTime = 0;
    audioTag.play();
  }

  const keyPress = (keydown) => {
    if(keydown.keyCode == clip.keyCode){
        playSound();
    }
}
  


  return(
      <div onClick = {playSound} className = "btn btn-secondary p-4 m-3">
          <audio className = "clip" 
                id = {clip.keyTrigger} 
                src = {clip.url}>
          </audio>
          {clip.keyTrigger}
      </div>
  
  );
} 






export default App;
