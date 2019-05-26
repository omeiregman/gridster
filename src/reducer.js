import * as types from './types';

const initialState = {
    rows: 3,
    columns: 3,
    path: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GENERATE_GRID:
            return action.payload
        case types.GENERATE_PATH:
            return action.payload
        default:
            return initialState;
    }
}

export default reducer;
