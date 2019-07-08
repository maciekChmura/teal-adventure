import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import ScrollToBottom from 'react-scroll-to-bottom';
import Score from './Score';
import story from './story';
import sound from './sounds/smb_powerup.wav';

import './styles.css';

const audio = new Audio(sound);

function App() {
  const [data, setData] = useState(story['a_1']);
  // const [data, setData] = useState(story['a_6']);
  const [points, setPoints] = useState([]);
  const [flipAnim, setFlipAnim] = useState(true);
  const handleClick = data => {
    setData(story[data]);
    if (story[data].teal) {
      setFlipAnim(flipAnim ? false : true);
      setPoints(points => [...points, 'star']);
      audio.play();
    }
  };

  return (
    <ScrollToBottom className="App">
      <Score className="score" pose={flipAnim ? 'pose1' : 'pose2'}>
        {points.length === 0 ? (
          <i className="nes-icon is-medium star is-empty" />
        ) : null}
        {points.map(star => (
          <i className="nes-icon is-medium star" />
        ))}
      </Score>
      <Typist
        className="text"
        key={data.text}
        cursor={{ show: false }}
        // avgTypingDelay={60}
        avgTypingDelay={10}
      >
        {data.text ? (
          data.text.map(text => (
            <p className="nes-text is-primary text">{text}</p>
          ))
        ) : (
          <p />
        )}
        {data.info ? (
          data.info.map(info => <p className="nes-text grey text">{info}</p>)
        ) : (
          <p />
        )}
        <div className="buttons">
          {data.buttons.map(button => (
            <button
              className="button nes-btn"
              onClick={() => handleClick(button.pointer || 'end')}
            >
              {button.text} >
            </button>
          ))}
        </div>
      </Typist>
    </ScrollToBottom>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
