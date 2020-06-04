import { app, h } from 'https://unpkg.com/hyperapp';
import 'https://www.unpkg.com/lodash@4.17.15/lodash.js';

const OnTileClick = (state, clickedTile) => {
  const isValid = clickedTile.number === state.currentNumber;
  if (isValid) {
    clickedTile.time = Date.now() - state.previousTime;
    console.log(clickedTile);
    state.previousTime = Date.now();
  } else {
    clickedTile.errors++;
  }
  return {
    ...state,
    numberToHighlight: isValid ? clickedTile.number : state.numberToHighlight,
    currentNumber: isValid
      ? state.currentNumber + 1
      : state.currentNumber,
  };
};

app({
  node: document.getElementById('app'),

  init: {
    previousTime: Date.now(),
    numbers: _.shuffle(Array.from({ length: 25 }, (empty, index) => {
      return {
        number: index + 1,
        time: null,
        errors: 0,
      }
    })),
    currentNumber: 1,
    numberToHighlight: null,
  },

  view: (state) => {
    return h('div', {
      class: "grid grid-cols-5 text-2xl font-bold"
    }, state.numbers.map((number) => h(
      'button',
      {
        onclick: [OnTileClick, number],
        class: "border border-black flex items-center justify-center",
        style: {
          height: "calc(100vw / 5)",
          backgroundColor: state.numberToHighlight === number.number ? 'blue' : 'white',
        },
      },
      number.number,
    ));
);
  }
});
