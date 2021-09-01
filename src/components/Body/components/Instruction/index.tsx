import React, { ReactElement } from 'react';

function Instruction(): ReactElement {
  return (
    <div>
      <h2>Instruction</h2>
      <p>
        The player is presented with a number of cards which have pictures and name. Every time the player click on a
        card they have never clicked before, they gain 1 score point. If they pick the card that have been chosen
        before, it is game over and the game restart. Try to get the max score!
      </p>
    </div>
  );
}

export default Instruction;
