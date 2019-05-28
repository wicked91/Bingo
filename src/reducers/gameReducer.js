import {
  INIT_ONE_BINGO,
  INIT_TWO_BINGO,
  SET_ONE_BINGO,
  SET_TWO_BINGO,
  NEXT_TURN,
  CHECKNUM_INIT,
  CHECKNUM,
  GAME_START_TOGGLE,
} from '../actions/types';

const initialState = {
  checknum: [],
  onebingo : [],
  twobingo : [],
  gameStart: false,
  turn : 1
};

export default function (state = initialState, action) {
  switch (action.type) {
      case INIT_ONE_BINGO:
      return {
        ...state,
        onebingo: action.payload
      };
    case INIT_TWO_BINGO:
      return {
        ...state,
        twobingo: action.payload
      };
      case SET_ONE_BINGO:
      return {
        ...state,
        onebingo: [action.payload, ...state.onebingo]
      };
    case SET_TWO_BINGO:
      return {
        ...state,
        twobingo: [action.payload, ...state.twobingo]
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
