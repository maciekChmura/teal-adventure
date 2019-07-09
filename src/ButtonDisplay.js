import React from 'react';

function ButtonDisplay({ buttonArray, handleClick }) {
  return (
    <>
      {buttonArray.map(button => (
        <button
          key={button.text}
          className="button nes-btn"
          onClick={() => handleClick(button.pointer || 'end')}
        >
          {button.text} >
        </button>
      ))}
    </>
  );
}

export default ButtonDisplay;
