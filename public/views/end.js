
import { h } from 'https://unpkg.com/hyperapp';
import * as actions from '../actions.js';

export const end = (state) => h('div', {}, 
  [
    'Game Over',
    h('button', {
      onclick: actions.resetGame,
    }, 'Play Again'),
  ]
);
