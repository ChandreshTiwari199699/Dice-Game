import React from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from 'react';
import { Button, OutlineButton } from './styled/Button';
import Rules from './Rules';

const GamePlay = () => {
  const [score,setScore] =useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const[currentDice, setCurrentDice] =useState(1);
  const[error,setError]=useState("");
  const[showRules, setShowRules] =useState(false);


  const generateRandomNumber =(min, max)=>{
    return Math.floor(Math.random( )* (max - min) + min);
  };
  const roleDice =() =>{
    if(!selectedNumber){
      setError("Please select a number");
     return;
  }
  
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prew) => randomNumber);

    

if(selectedNumber==randomNumber) {
  setScore((prew) => prew + randomNumber);
}else{
  setScore((prew) =>prew-2);
}
setSelectedNumber(undefined);



  };
const resetScore = () => {
  setScore(0);
};



  return (
   <MainContainer>
   <div className="top_section">
    <TotalScore  score={score} />
   <NumberSelector
   error={error}
   setError={setError}
    selectedNumber= {selectedNumber}
    setSelectedNumber={setSelectedNumber}
   />
   </div>
   <RoleDice 
   currentDice={currentDice} roleDice={roleDice}
   />
<div className="btns">

<OutlineButton
onClick={resetScore}>Reset</OutlineButton>
<Button
 onClick={()=> setShowRules ((prew)=>!prew) }>

{showRules ? 'Hide Rules' : 'Show Rules'}Rules</Button>



</div>

     {showRules && <Rules />}


   </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.btns {
  margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  

}
  
  `;
  