export interface RegistrationFormModel {
    name: string;
    email: string;
    phone: string;
    position_id: number;
    photo: FileList | File;
}

export class RegistrationForm implements RegistrationFormModel {
    name: string;
    email: string;
    phone: string;
    position_id: number;
    photo: File | FileList;

    constructor({
                    name = null,
                    email = null,
                    phone = null,
                    position_id = null,
                    photo = null,
                } = {}) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.position_id = position_id;
        if (photo instanceof FileList && photo.length) {
            this.photo = photo[0];
        } else if (photo instanceof File) {
            this.photo = photo;
        } else {
            this.photo = null;
        }
    }

    static createFormData(formValue: RegistrationFormModel) {
        const form = new RegistrationForm(formValue);
        const formData = new FormData();
        Object.keys(form).forEach(key => {
            formData.append(key, form[key]);
        });
        return formData;
    }
}
