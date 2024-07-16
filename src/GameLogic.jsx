import { useState, useEffect } from "react";
import { CHOOSE_OPTION, ClEAR, OPTIONS, PAPER, PC_OPTION, PLAY, RESULT, ROCK, SCISSORS, USER_OPTION } from "./constants";

const GameLogic = () => {
  const [userOption, setUserOption] = useState("");
  const [pcSelectedOption, setPcSelectedOption] = useState("");
  const [message, setMessage] = useState("");

  const handleUserOption = (e) => {
    setUserOption(e.target.value);
  };

  const play = () => {
    const pcSelectedIndex = Math.floor(Math.random() * OPTIONS.length);
    setPcSelectedOption(OPTIONS[pcSelectedIndex]);
  };

  useEffect(() => {
    if (userOption && pcSelectedOption) {
      if (pcSelectedOption === userOption) {
        setMessage("Draw");
      } else if (
        (pcSelectedOption === PAPER && userOption === ROCK) ||
        (pcSelectedOption === SCISSORS && userOption === PAPER) ||
        (pcSelectedOption === ROCK && userOption === SCISSORS)
      ) {
        setMessage("PC Won");
      } else {
        setMessage("User Won");
      }
    }
  }, [userOption, pcSelectedOption]);

  useEffect(() => {
    userOption === "" && clear()
  }, [userOption])

  const clear = () => {
    setMessage("");
    setPcSelectedOption("");
    setUserOption("");
  };

  return (
    <div>
      <p>{PC_OPTION}: {pcSelectedOption}</p>
      <p>{USER_OPTION}: {userOption}</p>
      <p>{RESULT}: {message}</p>
      <select
        value={userOption}
        name="option"
        id="option"
        onChange={handleUserOption}
      >
        <option value="">{CHOOSE_OPTION}</option>
        {OPTIONS.map((option, index) => (
          <option key={index} value={option}>
            Option: {option}
          </option>
        ))}
      </select>
      <div>
        <button onClick={play} disabled={!userOption}>
          {PLAY}
        </button>
        <button onClick={clear}>{ClEAR}</button>
      </div>
    </div>
  );
};

export default GameLogic;
