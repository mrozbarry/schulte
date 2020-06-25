import { app, h } from 'https://unpkg.com/hyperapp';
import 'https://www.unpkg.com/lodash@4.17.15/lodash.js';

import { game } from './views/game.js';
import { end } from './views/end.js';
import { start } from './views/start.js';

app({
  node: document.getElementById('app'),

  init: {
    previousTime: Date.now(),
    gridSize: 5,
    numbers: _.shuffle(Array.from({ length: 25 }, (empty, index) => {
      return {
        number: index + 1,
        // time: null,
        time: Math.random() * 10000,
        errors: 0,
      }
    })),
    currentNumber: 1,
    numberToHighlight: null,
    view: 'end',
  },

  view: (state) => {
    switch (state.view) {
      case 'start':
        return start(state);
      case 'end':
        return end(state);
      default:
        return game(state);
    }
  }
});
