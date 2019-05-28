import {
    SET_ONE_BOARD,
    SET_TWO_BOARD,
    NEXT_TURN,
    CHECKNUM_INIT,
    CHECKNUM,
    GAME_START_TOGGLE,
    

} from './types';

export const set_board = (index) => dispatch => {

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    array.sort(() => {
        return Math.random() - Math.random();
    })

    const { length } = array;
    const maxLength = 5;
    const iteratorCount = length / maxLength;
    let data = [];

    for (let i = 0; i < iteratorCount; i++) {
        data = [
            ...data,
            array.slice(i * maxLength, (i + 1) * maxLength),
        ];
    }

    if (index === 1) {
        dispatch({
            type: SET_ONE_BOARD,
            payload: data
        });
    } else {
        dispatch({
            type: SET_TWO_BOARD,
            payload: data
        });
    }
};

export const checknum_init = () => dispatch => {

    let data = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
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

    let data = (who ===1) ? 2 : 1;
    dispatch({
        type: NEXT_TURN,
        payload: data
    });
}