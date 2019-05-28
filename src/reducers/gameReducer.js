import {
  SET_ONE_BOARD,
  SET_TWO_BOARD,
  CHECKNUM_INIT,
  CHECKNUM,
  GAME_START_TOGGLE,
  NEXT_TURN,
} from '../actions/types';

const initialState = {
  oneboard: [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']],
  twoboard: [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']],
  checknum: [],
  gameStart: false,
  turn : 1
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ONE_BOARD:
      return {
        ...state,
        oneboard: action.payload
      };
    case SET_TWO_BOARD:
      return {
        ...state,
        twoboard: action.payload
      };
    case CHECKNUM_INIT:
      return {
        ...state,
        checknum: action.payload
      };
    case CHECKNUM:
      return {
        ...state,
        checknum: [
          ...state.checknum.slice(0, action.payload),
          true,
          ...state.checknum.slice(action.payload + 1, state.checknum.length)
        ]
      };
    case GAME_START_TOGGLE:
      return {
        ...state,
        gameStart: action.payload
      };
    case NEXT_TURN:
      return {
        ...state,
        turn: action.payload
      };
    default:
      return state;
  }
}
