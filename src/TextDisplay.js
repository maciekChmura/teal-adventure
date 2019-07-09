import React from 'react';

function TextDisplay({ dataArray, color }) {
  return (
    <div>
      {dataArray ? (
        dataArray.map(text => (
          <p key={text} className={`nes-text text ${color}`}>
            {text}
          </p>
        ))
      ) : (
        <p />
      )}
    </div>
  );
}

export default TextDisplay;
