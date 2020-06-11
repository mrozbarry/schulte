import { app, h } from 'https://unpkg.com/hyperapp';
import 'https://www.unpkg.com/lodash@4.17.15/lodash.js';

import { game } from './views/game.js';
import { end } from './views/end.js';

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
    currentNumber: 25,
    numberToHighlight: null,
    view: 'game',
  },

  view: (state) => {
    switch (state.view) {
      case 'end':
        return end(state);
        break;
      default:
        return game(state);
    }
  }
});
