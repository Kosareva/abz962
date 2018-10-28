import {FileInputComponent} from '@app/shared/components/file-input/file-input.component';

function mbToBytes(mb: number) {
    return mb * 1024 * 1024;
}

function bytesToMb(mb: number) {
    return (mb / 1024 / 1024).toFixed(2);
}

function isFileExists(control: FileInputComponent) {
    return !!control.value;
}

export function fileMaxSize(mb: number) {
    const maxSize = Math.abs(mb);
    const maxSizeBytes = mbToBytes(maxSize);
    return function (control: FileInputComponent) {
        if (isFileExists(control) && control.value.size > maxSizeBytes) {
            return {
                sizeError: {
                    size: `${bytesToMb(control.value.size)} MB`,
                    expected: `< ${maxSize} MB`
                }
            };
        } else {
            return null;
        }
    };
}

export function fileMinSize(mb: number) {
    const minSize = Math.abs(mb);
    const minSizeBytes = mbToBytes(minSize);
    return function (control: FileInputComponent) {
        if (isFileExists(control) && control.value.size < minSizeBytes) {
            return {
                sizeError: {
                    size: `${bytesToMb(control.value.size)} MB`,
                    expected: `> ${minSize} MB`
                }
            };
        } else {
            return null;
        }
    };
}

export function acceptFileTypes(types: string[]) {
    return function (control: FileInputComponent) {
        if (isFileExists(control) && !types.some((type) => control.value.type === type)) {
            return {
                typeError: {
                    type: control.value.type,
                    expected: types.join(', '),
                }
            };
        } else {
            return null;
        }
    };
}

type fileResolutionValidatorType = 'min' | 'max';

export function fileResolutionValidator(type: fileResolutionValidatorType, width: number, height: number) {
    return function (control: FileInputComponent) {
        return new Promise((resolve) => {
            if (!isFileExists(control)) {
                resolve(null);
            }
            const img: any = new Image();
            img.src = window.URL.createObjectURL(control.value);
            img.onload = function () {
                const self = this;
                let condition;
                switch (type) {
                    case 'min':
                        condition = this.width < width || this.height < height;
                        break;
                    case 'max':
                        condition = this.width > width || this.height > height;
                        break;
                    default:
                        condition = false;
                        break;
                }
                if (condition) {
                    resolve({
                        resolutionError: {
                            resolution: `${self.width}x${self.height}`,
                            expected: `${type === 'min' ? '>' : '<'}= ${width}x${height}`,
                        }
                    });
                } else {
                    resolve(null);
                }
            };
        });
    };
}

