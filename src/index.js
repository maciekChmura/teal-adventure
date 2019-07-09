import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import Score from './Score';
import story from './story';
import sound from './sounds/smb_powerup.wav';

import './styles.css';

const audio = new Audio(sound);

function App() {
  const [data, setData] = useState(story['a_1']);
  const [points, setPoints] = useState([]);
  const [flipAnim, setFlipAnim] = useState(true);
  const handleClick = data => {
    setData(story[data]);
    if (story[data].teal) {
      setFlipAnim(flipAnim ? false : true);
      setPoints(points => [...points, 'star']);
      audio.play();
    }
    if (data === 'a_1') {
      setPoints([]);
    }
  };

  return (
    <div className="App">
      <Score points={points} pose={flipAnim ? 'pose1' : 'pose2'} />
      <Typist
        className="text"
        key={data.text}
        cursor={{ show: false }}
        avgTypingDelay={50}
        // avgTypingDelay={10}
      >
        {data.text ? (
          data.text.map(text => (
            <p key={text} className="nes-text is-primary text">
              {text}
            </p>
          ))
        ) : (
          <p />
        )}
        {data.info ? (
          data.info.map(info => (
            <p key={info} className="nes-text grey text">
              {info}
            </p>
          ))
        ) : (
          <p />
        )}
        <div className="buttons">
          {data.buttons.map(button => (
            <button
              key={button.text}
              className="button nes-btn"
              onClick={() => handleClick(button.pointer || 'end')}
            >
              {button.text} >
            </button>
          ))}
        </div>
      </Typist>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
