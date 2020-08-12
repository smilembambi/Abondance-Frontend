import {AbstractControl, ValidatorFn} from "@angular/forms";

export const myValidatorPartenariat = (field1, field2): ValidatorFn => (control: AbstractControl) => {

  if(control.get(field2).value == "Autres" && control.get(field1).value == "") {
    return { myValidator: { valid: false } };
  }
  return null

}
