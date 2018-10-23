import {Action} from '@ngrx/store';

export const TRY_GET_POSITIONS = 'TRY_GET_POSITIONS';
export const GET_POSITIONS = 'GET_POSITIONS';

export class TryGetPositions implements Action {
    readonly type = TRY_GET_POSITIONS;

    constructor() {
    }
}

export class GetPositions implements Action {
    readonly type = GET_POSITIONS;

    constructor(public payload: Position[]) {
    }
}

export type PositionsActions = TryGetPositions | GetPositions;
