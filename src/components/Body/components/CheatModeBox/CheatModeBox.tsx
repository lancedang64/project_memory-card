import React, { ReactElement, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';

const OnSide = styled.aside`
  position: fixed;
  background: radial-gradient(#f4dd03, #9c8f0f);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: solid 2px black;
  box-shadow: 2px 2px black;
`;

interface TypeProps {
  setIsInvincible: Dispatch<SetStateAction<boolean>>;
  setIsDebugMode: Dispatch<SetStateAction<boolean>>;
  isDebugMode: boolean;
  isInvincible: boolean;
}

function CheatModeBox({ setIsInvincible, setIsDebugMode, isDebugMode, isInvincible }: TypeProps): ReactElement {
  const handleInvincible = (): void => {
    setIsInvincible((prevState) => !prevState);
  };

  const handleDebug = (): void => {
    setIsDebugMode((prevState) => !prevState);
  };

  return (
    <OnSide>
      <p>Set Invincibility Mode</p>
      <label className="switch">
        <input type="checkbox" checked={isInvincible} onChange={handleInvincible} />
        <span className="slider round"></span>
      </label>
      <p> Set Debug Mode</p>
      <label className="switch">
        <input type="checkbox" checked={isDebugMode} onChange={handleDebug} />
        <span className="slider round"></span>
      </label>
    </OnSide>
  );
}

export default CheatModeBox;
