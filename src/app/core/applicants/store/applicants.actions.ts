import {Action} from '@ngrx/store';
import {ApplicantsState} from '@app/core/applicants/store/applicants.reducers';

export const TRY_FETCH_APPLICANTS = 'TRY_FETCH_APPLICANTS';
export const FETCH_APPLICANTS = 'FETCH_APPLICANTS';
export const UNSET_APPLICANTS = 'UNSET_APPLICANTS';

export class TryFetchApplicants implements Action {
    readonly type = TRY_FETCH_APPLICANTS;
}

export class FetchApplicants implements Action {
    readonly type = FETCH_APPLICANTS;

    constructor(public payload: ApplicantsState) {
    }
}

export class UnsetApplicants implements Action {
    readonly type = UNSET_APPLICANTS;
}

export type ApplicantsActions = TryFetchApplicants | FetchApplicants | UnsetApplicants;
