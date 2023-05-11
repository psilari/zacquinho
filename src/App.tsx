import React, { useState } from "react";
import zacefron from "./assets/zacefron.jpg";
import "./App.css";
import getRandomValue from "./util/getRandomValue";

function App() {
  const { Howl } = require("howler");
  const [isPlaying, setIsPlaying] = useState(false);

  const sound = new Howl({
    src: [getRandomValue()],
  });

  const handlePlay = () => {
    setIsPlaying(true);
    sound.play();
    sound.on("end", function () {
      setIsPlaying(false);
    });
  };

  return (
    <div className="container">
      <h1>Fale com Zacquinho</h1>
      <button className="button-img" disabled={isPlaying} onClick={() => handlePlay()}>
        <img
          className="button-img"
          src={zacefron}
          alt="Zacquinho"
          width="500"
          height="600"
          style={{ cursor: "pointer" }}
          // style={{ borderRadius: 50 }}
        />
      </button>
    </div>
  );
}

export default App;
