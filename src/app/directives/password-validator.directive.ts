import { Directive } from '@angular/core';

import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[passwordValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordValidatorDirective,
    multi: true
  }]
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {

    var regexp = new RegExp('^[a-z0-9]{8,16}$');

    if (control.value && !regexp.test(control.value)) {
      return { 'passwordInvalid': true };
    }
    return null;
  }
}
