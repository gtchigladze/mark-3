import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function recomenderValidator(data: any): ValidatorFn {
    console.log('validator called', data);
    
    return (control: AbstractControl): ValidationErrors | null => {
    //   const forbidden = nameRe.test(control.value);
    //   return forbidden ? {forbiddenName: {value: control.value}} : null;

    let count = 0;
    let recomenderNameChecker = control.value;
    for (let i = 0; i < data.length; i++) {
        const recomenderName = data.recomender;
        if (recomenderNameChecker === recomenderName) {
            count++;
            recomenderNameChecker = recomenderName;
        }
    }

    

    if (count > 3) {
        return {controlDisabled: {disabled: true}};
    } else {
        return null;
    }
  }
}