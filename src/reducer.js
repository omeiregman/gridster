import * as types from './types';

const initialState = {
    rows: 10,
    columns: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GENERATE_GRID:
            return action.payload
        default:
            return initialState;
    }
}

export default reducer;
