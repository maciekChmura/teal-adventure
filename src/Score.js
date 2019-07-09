import React from 'react';
import posed from 'react-pose';

const StarsAnim = posed.div({
  pose1: {
    // scaleY: 1,
    y: 1,
    transition: {
      type: 'keyframes',
      values: [1, -20, 1],
      times: [0, 0.3, 1],
    },
  },
  pose2: {
    // scaleY: 1,
    y: 1,
    transition: {
      type: 'keyframes',
      values: [1, -20, 1],
      times: [0, 0.3, 1],
    },
  },
});

function Score({ points, pose }) {
  return (
    <StarsAnim pose={pose} className="score">
      {points.length === 0 ? (
        <i className="nes-icon is-medium star is-empty" />
      ) : null}
      {points.map(star => (
        <i className="nes-icon is-medium star" />
      ))}
    </StarsAnim>
  );
}

export default Score;
