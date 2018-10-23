import {User} from '@app/core/user/user';

export class Applicant extends User {

    registration_timestamp: number;

    constructor({
                    id = 0,
                    name = null,
                    email = null,
                    phone = null,
                    position = null,
                    position_id = 0,
                    photo = null,
                    registration_timestamp = 0,
                } = {}) {
        super({
            id,
            name,
            email,
            phone,
            position,
            position_id,
            photo,
        });
        this.registration_timestamp = registration_timestamp;
    }
}