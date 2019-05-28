import {
    INIT_ONE_BINGO,
    INIT_TWO_BINGO,
    SET_ONE_BINGO,
    SET_TWO_BINGO,
    NEXT_TURN,
    CHECKNUM_INIT,
    CHECKNUM,
    GAME_START_TOGGLE,
} from './types';

export const init_bingo = () => dispatch => {
    let data = [];
    dispatch({
        type: INIT_ONE_BINGO,
        payload: data
    });
    dispatch({
        type: INIT_TWO_BINGO,
        payload: data
    });
}

export const checknum_init = () => dispatch => {

    let data = [];
    for(let index = 0; index <= 25; index ++){
        data.push(false)
    }
    dispatch({
        type: CHECKNUM_INIT,
        payload: data
    });
}

export const checknum_click = (num) => dispatch => {
    dispatch({
        type: CHECKNUM,
        payload: num
    });
}

export const game_start_toggle = (data) => dispatch => {
    dispatch({
        type: GAME_START_TOGGLE,
        payload: data
    });
}

export const next_turn_toggle = (who) => dispatch => {

    let data = (who === 1) ? 2 : 1;
    dispatch({
        type: NEXT_TURN,
        payload: data
    });
}

export const bingo_check = (array, player) => dispatch => {

    if (player === 1) {
        dispatch({
            type: SET_ONE_BINGO,
            payload: array
        });
    } else {
        dispatch({
            type: SET_TWO_BINGO,
            payload: array
        });
    }

}