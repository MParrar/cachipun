import "./App.css";
import { ROCK_PAPER_SCISSORS_GAME } from "./constants";
import GameLogic from "./GameLogic";

function App() {

  return (
    <div>
     <h1>{ROCK_PAPER_SCISSORS_GAME}</h1>
     <GameLogic/>
    </div>
  );
}

export default App;
