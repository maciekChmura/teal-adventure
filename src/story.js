const story = {
  a_1: {
    text: [
      `Elon...,`,
      `please, trust me!`,
      `I'm an engineer...`,
      `my calculations are correct`,
      `...`,
      `just launch that rocket already!`,
    ],
    buttons: [{ pointer: `a_2`, text: `` }],
  },
  a_2: {
    text: [`...`, `Whats this annoying sound?`],
    buttons: [{ pointer: `a_3`, text: `` }],
  },
  a_3: {
    text: [`Elon??`, `...`, `...ring ring ring`],
    buttons: [{ pointer: `a_4`, text: `` }],
  },
  a_4: {
    text: [`...`],
    buttons: [{ pointer: `a_5`, text: `` }],
  },
  a_5: {
    text: [`This was a dream?!`, `nooooooooo...`],
    buttons: [{ pointer: `a_6`, text: `` }],
  },
  a_6: {
    text: [`Maybe tomorrow...`, `time to get up...`],
    buttons: [{ pointer: `b_1`, text: `` }],
  },
  b_1: {
    text: [
      `It's Monday`,
      `...it looks hot outside`,
      `...a quick commute, and ready to write some code`,
    ],
    buttons: [
      { pointer: `b_2`, text: `take the bus` },
      { pointer: `b_3`, text: `go by bike` },
    ],
  },
  b_2: {
    text: [
      `I'm glad I took the bus.`,
      `It looks way to hot to ride the bike`,
      `Those new buses has nice AC`,
    ],
    buttons: [{ pointer: `b_4`, text: `` }],
  },
  b_3: {
    text: [`I'm glad I took the bike.`, `The weather is just perfect`],
    buttons: [{ pointer: `b_4`, text: `` }],
  },
  b_4: {
    text: [
      `Where is my ID?`,
      `OK`,
      `Boot up the system and grab something to drink`,
    ],
    buttons: [
      { pointer: `b_5`, text: `coffee` },
      { pointer: `b_5`, text: `tea` },
      { pointer: `b_5`, text: `yerba mate` },
    ],
  },
  b_5: {
    text: [`What's on the board?`, `...`, `Ohh, this looks interesting`],
    buttons: [{ pointer: `c_1`, text: `` }],
  },
  c_1: {
    text: [
      `[VB-2345] Create User card component`,
      `[VB-2345] Fix chart performance on update`,
    ],
    buttons: [
      { pointer: `c_2_1`, text: `pick the card task` },
      { pointer: `c_3_1`, text: `pick the charts performance task` },
      { pointer: `c_4_1`, text: `wait for Scrum Master to give me something` },
    ],
  },
  c_2_1: {
    text: [`This looks easy`, `Probably to easy...`, `and boring...`],
    buttons: [{ pointer: `c_2_2`, text: `` }],
  },
  c_2_2: {
    text: [
      `I will work on something more demanding next time...`,
      `It's Monday, let's chill`,
    ],
    buttons: [{ pointer: `end_bad`, text: `` }],
  },
  end_bad: {
    text: [`Your score could be higher :)`, `Wanna try one more time?`],
    buttons: [{ pointer: 'a_1', text: `yes` }],
  },
  end_good: {
    text: `end`,
    buttons: [{ pointer: 1, text: `again` }],
  },
};

export default story;
