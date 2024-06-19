import React from 'react';
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
<h2>How to play Dice Game</h2>
<div className="text">

<p>Select Any Number</p>
<p>Click on Dice</p>
<p>If the number is the same as the dice, you win!</p>
<p>If the number is not same as the dice, you loose!</p>

</div>
    </RulesContainer>
      
 
  )
}

export default Rules;
 const RulesContainer = styled.div`
 max-width: 800px;
 margin: 0 auto;

 background-color:#fbf1f1 ;
 padding: 20px;
 margin-top: 40px;
 border-radius: 10px;
 h2{
    font-size: 24px;

 }

 .text{
    margin-top: 24px;
 }
 
 `;
