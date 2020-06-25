import { h } from 'https://unpkg.com/hyperapp';
import * as actions from '../actions.js';

export const start = (state) => h('form', {
  class: "pt-8 text-center",
  onsubmit: [
    actions.StartGame,
    (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const gridSize = formData.get('grid-size')
      return {
        gridSize,
      };
    }
  ]
}, [
  h('h1', {class: "text-xl mb-8"}, 'Schulte'),
  h('label', {}, [
    'Grid Size',
    h('input', {
      name: 'grid-size',
      value: 5,
      class: 'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
    }),
  ]),
  h('button', {
    class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded leading-none",
    type: 'submit',
  }, 'Start')
]);
