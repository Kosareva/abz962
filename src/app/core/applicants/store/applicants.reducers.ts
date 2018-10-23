import {Applicant} from '@app/core/applicants/applicant';
import * as ApplicantsActions from '@app/core/applicants/store/applicants.actions';

export class ApplicantsState {

    applicants: Applicant[];
    page: number;
    links: {
        next_url: string,
        prev_url: string
    };

    constructor(applicants, page, next_url, prev_url) {
        this.applicants = applicants;
        this.page = page;
        this.page = page;
        this.links = {
            next_url: next_url,
            prev_url: prev_url
        };
    }
}

const initialState: ApplicantsState = new ApplicantsState([], 0, null, null);

export function applicantsReducer(state: ApplicantsState = initialState, action: ApplicantsActions.ApplicantsActions) {
    switch (action.type) {
        case (ApplicantsActions.FETCH_APPLICANTS):
            return {
                applicants: [...state.applicants, ...action.payload.applicants],
                page: action.payload.page,
                links: {
                    next_url: action.payload.links.next_url,
                    prev_url: action.payload.links.prev_url
                }
            };
        case (ApplicantsActions.UNSET_APPLICANTS):
            return initialState;
        default:
            return state;
    }
}
