import { RootState } from './types/root.state';
import { RootActionTypes, SET, UNSET } from './types/root.actions';

const initialState: RootState = {
    recruits: [],
};

export const rootReducer = (state: RootState = initialState, action: RootActionTypes): RootState => {
    switch (action.type) {
        case SET:
            return {
                recruits: (state.recruits = action.payload),
            };
        case UNSET:
            return {
                recruits: (state.recruits = initialState.recruits),
            };
        default:
            return state;
    }
};
