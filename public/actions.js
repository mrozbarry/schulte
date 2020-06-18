export const OnTileClick = (state, clickedTile) => {
  const isValid = clickedTile.number === state.currentNumber;
  if (!isValid) {
    clickedTile.errors++;
    return {...state};
  }

  clickedTile.time = Date.now() - state.previousTime;
  state.previousTime = Date.now();

  if (clickedTile.number === 25) {
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

export const resetGame = (state) => {
    const gridSize = 5
    const totalCells = Math.pow(gridSize, 2)
    return { 
      ...state, 
      previousTime: Date.now(),
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

export const StartGame = resetGame;
