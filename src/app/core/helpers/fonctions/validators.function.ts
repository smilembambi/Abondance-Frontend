import {AbstractControl, ValidatorFn} from "@angular/forms";

export const myValidator = (field1, field2): ValidatorFn => (control: AbstractControl) => {

  if(control.get(field2).value == true && control.get(field1).value == "") {
    return { myValidator: { valid: false } };
  }
  return null

}
