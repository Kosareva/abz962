export class User {

    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    position_id: number;
    photo: string;

    constructor({
                    id = 0,
                    name = null,
                    email = null,
                    phone = null,
                    position = null,
                    position_id = 0,
                    photo = null
                } = {}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.position = position;
        this.position_id = position_id;
        this.photo = photo;
    }

}
