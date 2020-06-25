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

const BAR_WIDTH = 40;

export const end = (state) => h('div', {
  class: "pt-8 text-center",
}, 
  [
    h('h1', {class: "text-xl mb-8"}, 'Game Over'),
    h(
        'div', 
        {}, 
        [`Total time: ${(totalTime(state)/1000).toFixed(2)}`],
    ), h('h1', {}, `Total errors: ${totalErrors(state)}`), 
    h('svg', { 
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'mt-2 mx-auto border-b',
      height: '200px',
      width: `${BAR_WIDTH * state.numbers.length}px`
      }, 
      state.numbers.sort((a, b) => {
        return a.number - b.number;
      }).map((number, index) => {
        return h('g', {}, [
          h('rect', {
            x: index * BAR_WIDTH,
            y: number.time / 10,
            width: BAR_WIDTH,
            height: 999, 
            fill: 'white',
            stroke: 'black'
          }),

          h('text', {
            'text-anchor': 'middle',
            x: (index * BAR_WIDTH) + (BAR_WIDTH / 2),
            y: 170, 
          }, number.number),

          h('text', {
            class: 'text-sm',
            'text-anchor': 'middle',
            x: (index * BAR_WIDTH) + (BAR_WIDTH / 2),
            y: 190, 
          }, `${(number.time / 1000).toFixed(1)}s`),
        ])
      })
    ),

    h('button', {
      class: "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded leading-none",
      onclick: actions.Start,
    }, 'Play Again'),
  ]
);
