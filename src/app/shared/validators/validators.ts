import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';

function mbToBytes(mb: number) {
    return mb * 1024 * 1024;
}

export const EMAIL_PATTERN = /([!#-\'*+/-9=?A-Z^-~-]+(\\.[!#-\'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \\t]|(\\\\[\\t -~]))+")@([!#-\'*+/-9=?A-Z^-~-]+(\\.[!#-\'*+/-9=?A-Z^-~-]+)*|\\[[\\t -Z^-~]*])/;
export const PHONE_PATTERN = /^[\+]{0,1}380([0-9]{9})$/;

export function isInteger(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return !Number.isInteger(+control.value) ? {typeError: {needs: 'integer'}} : null;
    };
}

export function isString(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return !isNaN(control.value) ? {typeError: {needs: 'string'}} : null;
    };
}

export function maxSize(mb: number) {
    return function (c: FormControl) {
        const fileList = c.value;
        if (!(fileList instanceof FileList) || !fileList.length) {
            return null;
        }
        const file = fileList[0];
        if (file.size > mbToBytes(mb)) {
            return {
                sizeError: {
                    minSize: mb,
                }
            };
        } else {
            return null;
        }
    };
}

export function accept(types: string[]) {
    return function (c: FormControl) {
        const fileList = c.value;
        if (!(fileList instanceof FileList) || !fileList.length) {
            return null;
        }
        const file = fileList[0];
        const isAcceptable = types.some((type) => file.type === type);
        if (!isAcceptable) {
            return {
                typeError: {
                    allowedTypes: types.join(', '),
                }
            };
        } else {
            return null;
        }
    };
}

export function single() {
    return function (c: FormControl) {
        const fileList = c.value;
        if (!(fileList instanceof FileList) || !fileList.length) {
            return null;
        }
        if (fileList.length > 1) {
            return {
                filesAmountError: {
                    allowedAmount: 1,
                }
            };
        } else {
            return null;
        }
    };
}

export function minResolution(width: number, height: number) {
    return function (c: FormControl) {
        return new Promise((resolve) => {
            const fileList = c.value;
            if (!(fileList instanceof FileList) || !fileList.length) {
                return null;
            }
            const file = fileList[0];
            const img: any = new Image();
            img.src = window.URL.createObjectURL(file);
            img.onload = function () {
                if (this.width < width || this.height < height) {
                    resolve({
                        resolutionError: {
                            minResolution: width + 'x' + height,
                        }
                    });
                } else {
                    resolve(null);
                }
            };
        });
    };
}
