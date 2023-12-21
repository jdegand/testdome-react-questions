import React from "react";
import ReactDOM from "react-dom";

function CharacterAttributes({ totalPoints }) {

    const [health, setHealth] = React.useState(0);
    const [stamina, setStamina] = React.useState(0);
    const [speed, setSpeed] = React.useState(0);
    const [score, setScore] = React.useState(0);

    React.useEffect(() => {
        setScore(() => stamina + speed + health);
    }, [health, stamina, speed]);

    const handleChange = (e) => {
      
        // Could save e.target.name & e.target.value to variables as well
      
        const isWithinThreshold = +e.target.value <= Math.floor(totalPoints * 0.7);
        const isTotalPointsOne = totalPoints === 1;

        if (e.target.name === "health") {
            if ((isTotalPointsOne && stamina === 0 && speed === 0 && +e.target.value === 1) ||
                (isWithinThreshold && +e.target.value + stamina + speed <= totalPoints)) {
                setHealth(+e.target.value);
            }
        } else if (e.target.name === "stamina") {
            if ((isTotalPointsOne && health === 0 && speed === 0 && +e.target.value === 1) ||
                (isWithinThreshold && health + +e.target.value + speed <= totalPoints)) {
                setStamina(+e.target.value);
            }
        } else if (e.target.name === "speed") {
            if ((isTotalPointsOne && health === 0 && stamina === 0 && +e.target.value === 1) ||
                (isWithinThreshold && health + stamina + +e.target.value <= totalPoints)) {
                setSpeed(+e.target.value);
            }
        }
    };

    return (
        <div>
            Character stats: <span id="points">{Number(totalPoints) - score}</span> points left.
            <div>
                <input type="range" id="health" name="health" min="0" max={totalPoints} value={health} step="1" onChange={(e) => handleChange(e)} />Health
            </div>
            <div>
                <input type="range" id="stamina" name="stamina" min="0" max={totalPoints} value={stamina} step="1" onChange={(e) => handleChange(e)} />Stamina
            </div>
            <div>
                <input type="range" id="speed" name="speed" min="0" max={totalPoints} value={speed} step="1" onChange={(e) => handleChange(e)} />Speed
            </div>
        </div>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);

/*
Problems with this implementation
- max -> distorts the range 
- can't move the sliders again after score is equal to totalPoints
- should have added name property to inputs -> easily overlooked
- I don't mind props -> especially when you have a lot of local variables

- Lesson learned -> best to do all logic in a separate handler function

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function CharacterAttributes(props) {
  const [health, setHealth] = React.useState(0);
  const [stamina, setStamina] = React.useState(0);
  const [speed, setSpeed] = React.useState(0);
  const [score, setScore] = React.useState(0);
  
  // At one point, I tried to use a state object and a single state handler
  // e.target.name = e.target.value 
  // I was having difficulty so I dumbed it down to use separate state

  const max = props.totalPoints === 1 ? 1 : Math.floor(props.totalPoints * .7);
  
  React.useEffect(()=> {
    setScore(()=> stamina + speed + health);
  }, [health,stamina,speed]);
  
  return (
    <div>
      Character stats: <span id="points">{Number(props.totalPoints) - score}</span> points left.
      <div>
        <input type="range" id="health" min="0" max={max} value={health} step="1" onChange={(e)=> {
           
            if(props.totalPoints === 1 && stamina === 1 || speed === 1) return;
            if(props.totalPoints === score) return;
            setHealth(+e.target.value) 
          }} />Health
      </div>
      <div>
        <input type="range" id="stamina" min="0" max={max} value={stamina} step="1" onChange={(e)=> {
            
            if(props.totalPoints === 1 && health === 1 || speed === 1) return;
            if(props.totalPoints === score) return;
            setStamina(+e.target.value)}} />Stamina
      </div>
      <div>
        <input type="range" id="speed" min="0" max={max} value={speed} step="1" onChange={(e)=> {

            if(props.totalPoints === 1 && health === 1 || stamina === 1) return;
            if(props.totalPoints === score) return;

            setSpeed(+e.target.value)
          }} />Speed
      </div>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CharacterAttributes totalPoints={15} />);
*/
