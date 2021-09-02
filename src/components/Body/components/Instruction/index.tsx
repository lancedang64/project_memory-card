import React, { ReactElement } from 'react';

function Instruction(): ReactElement {
  return (
    <div>
      <h2>How to Play</h2>
      <p>
        Memorize and pick 1 character card each turn. Make sure that you do not ever pick a character that you have
        picked before! Try to reach max score for a surprise!
      </p>
    </div>
  );
}

export default Instruction;
