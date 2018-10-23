import * as PositionsActions from '@app/views/home/registration/store/positions.actions';

export interface Position {
    id: number;
    name: string;
}

export interface State {
    positions: Position[];
}

const initialState: State = {
    positions: []
};

export function positionsReducer(state = initialState, action: PositionsActions.PositionsActions) {
    switch (action.type) {
        case (PositionsActions.GET_POSITIONS):
            return {
                ...state,
                positions: action.payload
            };
        default:
            return state;
    }
}
