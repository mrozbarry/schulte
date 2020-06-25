export const OnTileClick = (state, clickedTile) => {
  const isValid = clickedTile.number === state.currentNumber;
  if (!isValid) {
    clickedTile.errors++;
    return {...state};
  }

  clickedTile.time = Date.now() - state.previousTime;
  state.previousTime = Date.now();

  if (clickedTile.number === Math.pow(state.gridSize, 2)) {
    state.view = 'end';
  }

  return {
    ...state,
    numberToHighlight: isValid ? clickedTile.number : state.numberToHighlight,
    currentNumber: isValid
      ? state.currentNumber + 1
      : state.currentNumber,
  };
};

export const StartGame = (state, props = {}) => {
    const gridSize = props.gridSize || 5
    const totalCells = Math.pow(gridSize, 2)
    return { 
      ...state, 
      previousTime: Date.now(),
      gridSize,
      numbers: _.shuffle(Array.from({ length: totalCells }, (empty, index) => {
        return {
          number: index + 1,
          time: null,
          errors: 0,
        }
      })),
      currentNumber: 1,
      numberToHighlight: null,
      view: 'game',
    }
};

export const Start = (state, props = {}) => {
    const gridSize = props.gridSize || 5
    const totalCells = Math.pow(gridSize, 2)
    return { 
      ...state, 
      previousTime: Date.now(),
      gridSize,
      numbers: _.shuffle(Array.from({ length: totalCells }, (empty, index) => {
        return {
          number: index + 1,
          time: null,
          errors: 0,
        }
      })),
      currentNumber: 1,
      numberToHighlight: null,
      view: 'start',
    }
};

