export const OnTileClick = (state, clickedTile) => {
  const isValid = clickedTile.number === state.currentNumber;
  if (!isValid) {
    clickedTile.errors++;
    return {...state};
  }

  clickedTile.time = Date.now() - state.previousTime;
  console.log(clickedTile);
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

export const resetGame = (state) => ({
  ...state, 
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
});
