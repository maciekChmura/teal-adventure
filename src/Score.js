import posed from "react-pose";

const Score = posed.div({
  pose1: {
    // scaleY: 1,
    y: 1,
    transition: {
      type: "keyframes",
      values: [1, -20, 1],
      times: [0, 0.3, 1]
    }
  },
  pose2: {
    // scaleY: 1,
    y: 1,
    transition: {
      type: "keyframes",
      values: [1, -20, 1],
      times: [0, 0.3, 1]
    }
  }
});

export default Score;
