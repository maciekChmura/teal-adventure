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
    info: [
      `Welcome to a simple game about Teal Organizations`,
      `A new way for groups and organizations to work together`,
      `"The most exciting breakthroughs of the twenty-first century will not occur because of technology, but because of an expanding concept of what it means to be human."`,
      `   `,
      `John Naisbitt`,
    ],
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
      `[VB-2945] Add zoom controls to WebGL visualization component`,
      `[VB-2782] Fix chart performance on update`,
    ],
    buttons: [{ pointer: `c_2`, text: `examine tasks` }],
  },
  c_2: {
    text: [
      `The zoom task looks super hard. WebGL is written in JavaScript but I don't know anything more about it, and I never worked in WebGL. On the other hand I like 3D... Should I pick it? Maybe I will learn new stuff...`,
      `The chart task is not super obvious. There can be multiple reasons why the update is slow. Good thing I have experience in front and backend JavaScript. Hopefully I will be able to track this issue and fix it either way`,
    ],
    buttons: [
      { pointer: `c_3`, text: `pick the WebGL task` },
      { pointer: `c_4`, text: `pick the chart performance task` },
      { pointer: `c_5`, text: `wait for Scrum Master to give me something` },
    ],
  },
  c_3: {
    text: [
      `Wow this looks hard...`,
      `Probably I will not be able to finish it on my own...`,
    ],
    info: [
      `As you can imagine this is not the best choice :)`,
      `In teal organizations nobody is forced to pick a task`,
      `You can pick what to work on based on these rules:`,
      `1. you do what you are able to do,`,
      `2. you do what is necessary,`,
      `3. you are responsible for it,`,
      `4. what you do, you can change, but with preservation of 1, 2 and 3.`,
    ],
    buttons: [{ pointer: `c_2`, text: `pick again` }],
  },
  c_4: {
    text: [`Lets look into code and figure out what is happening here...`],
    buttons: [{ pointer: `c_4_1`, text: `` }],
    teal: true,
  },
  c_4_1: {
    text: [
      `Inside the component, there are multiple HTTP requests to fetch the data for charts`,
      `then the data is combined one big object`,
      `and used to display the chart`,
      `... there are a lot of for loops here...`,
    ],
    buttons: [{ pointer: `c_4_2`, text: `` }],
  },
  c_4_2: {
    text: [
      `O(n) is far from optimal`,
      `This is just ugly...`,
      `Who wrote this in the first place?`,
      `...`,
      `It was Mark...`,
      `Should I just tell him to fix this?`,
    ],
    buttons: [
      { pointer: `c_4_3`, text: `tell Mark to fix this` },
      { pointer: `d_1`, text: `investigate further` },
    ],
  },
  c_4_3: {
    text: [
      `He should know better...`,
      `I will just tell him how awful job he did!`,
      `Maybe this will motivate him to do better next time`,
    ],
    info: [
      `Not the best choice`,
      `Inside an organization we all have the same goal`,
      `We ara a group of people who create value`,
      `Blaming somebody for doing bad job does not help`,
      `"Do not look for the guilty one to punish - look for the cause to remove it"`,
      `Maybe Mark did the best he could, at that point in time`,
    ],
    buttons: [{ pointer: `c_4_2`, text: `` }],
  },
  c_5: {
    text: [`Whats new on Facebook?`, `Awwwwww, this cat is sooooo  cute.`],
    info: [
      `As you can imagine this is not the best choice :)`,
      `In teal organizations you should be active with picking your work`,
      `You can pick a task based on these rules:`,
      `1. you do what you are able to do,`,
      `2. you do what is necessary,`,
      `3. you are responsible for it,`,
      `4. what you do, you can change, but with preservation of 1, 2 and 3.`,
    ],
    buttons: [{ pointer: `c_2`, text: `pick again` }],
  },
  d_1: {
    text: [
      `Why are there multiple request in the first place?`,
      `... lets check backend...`,
    ],
    buttons: [{ pointer: `d_2`, text: `` }],
  },
  d_2: {
    text: [`Lots of simple routes`, `And the table structure is simple enough`],
    buttons: [{ pointer: `d_3`, text: `` }],
  },
  d_3: {
    text: [
      `These tables could use some associations...`,
      `Quite easy task, especially that we use Sequelize`,
    ],
    buttons: [{ pointer: `d_4`, text: `` }],
  },
  d_4: {
    text: [`Lets do this!`],
    info: [
      `You obviously consulted this database schema change with team lead :)`,
      'After 2 days of refactoring, implementation and testing, route is ready',
    ],
    buttons: [{ pointer: `d_5`, text: `` }],
  },
  d_5: {
    text: [
      `Now it is time to refactor the React component to use the new route`,
    ],
    buttons: [
      { pointer: `d_6`, text: `refactor component` },
      { pointer: `e_1`, text: `pair program with Mark` },
    ],
  },
  d_6: {
    text: [
      `Job done!`,
      `There is only one request`,
      `No need to iterate over data, and create one big object`,
      `Performance is visibly better`,
    ],
    info: [`...`, `What if this task could be done with Mark?`],
    buttons: [{ pointer: `d_5`, text: `` }],
  },
  e_1: {
    text: [
      `- Hey Mark, you free now?`,
      `I've changed the API route for chart data`,
      `We could sit together and figure out how to refactor the component to fix its performance`,
    ],
    info: [
      `Nice :D`,
      `Not only you are fixing bugs, You are also acting as a mentor`,
      `You are actively sharing knowledge and raising the whole team performance`,
      `"Don't be a supervisor - be a teacher, moderator and student."`,
    ],
    buttons: [{ pointer: `e_2`, text: `refactor component` }],
    teal: true,
  },
  e_2: {
    text: [
      `Job done!`,
      `There is only one request`,
      `No need to iterate over data, and create one big object`,
      `Performance is visibly better`,
      `Pair programming went really well`,
      `Now Mark is generally interested in learning more about backend`,
    ],
    buttons: [{ pointer: `e_3`, text: `` }],
  },
  e_3: {
    text: [
      `Fix is ready to be pushed`,
      `...`,
      `It's not perfect for sure`,
      `Some optimizations could still be done`,
      `Should I dig deeper into this?...`,
    ],
    buttons: [
      { pointer: `f_1`, text: `spend more time on the task` },
      { pointer: `f_2`, text: `push the fix for review` },
    ],
  },
  f_1: {
    info: [
      `How much better can you make it?`,
      `It is easy to fall into trap of procrastination`,
      `Something might look like work, but it might just be a way of postponing important things that actually matter`,
    ],
    buttons: [{ pointer: `e_3`, text: `` }],
  },
  f_2: {
    text: [`Hello team, please check this PR...`],
    info: [
      `"Do not expect perfection that cannot be achieved - expect progress that is always possible,"`,
    ],
    buttons: [{ pointer: `end`, text: `` }],
    teal: true,
  },
  end: {
    text: `end`,
    buttons: [{ pointer: 'a_1', text: `again` }],
  },
};

export default story;
