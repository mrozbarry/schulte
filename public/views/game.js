import { h } from 'https://unpkg.com/hyperapp';
import * as actions from '../actions.js';

export const game = (state) => h('div', {
  class: "grid grid-cols-5 text-2xl font-bold"
}, state.numbers.map((number) => h(
  'button',
  {
    onclick: [actions.OnTileClick, number],
    class: "border border-black flex items-center justify-center",
    style: {
      height: "calc(100vw / 5)",
      backgroundColor: state.numberToHighlight === number.number ? 'blue' : 'white',
    },
  },
  number.number,
)));

