
import { h } from 'https://unpkg.com/hyperapp';
import * as actions from '../actions.js';

const totalTime = (state) => {
  return state.numbers.reduce((total, number) => {
    return total + number.time;
  }, 0);
}

const totalErrors = (state) => {
  return state.numbers.reduce((total, number) => {
    return total + number.errors;
  }, 0);
}

export const end = (state) => h('div', {}, 
  [
    h('h1', {}, 'Game Over'),
    h(
        'div', 
        {}, 
        [`Total time: ${totalTime(state)/1000}`],
    ),
    h('h1', {}, `Total errors: ${totalErrors(state)}`),
    state.numbers.map(number => {
      return h(
        'div', 
        {}, 
        [`For number ${number.number} your time was ${number.time / 1000} seconds`])
    }),

    
    h('hr'),

    h('button', {
      onclick: actions.resetGame,
    }, 'Play Again'),
  ]
);
