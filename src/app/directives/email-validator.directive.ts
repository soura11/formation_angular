import { Directive } from '@angular/core';
import { AbstractControl, Validator,NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator{
  validate(control: AbstractControl) : {[key: string]: any} | null {
    var regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    if (control.value && !regexp.test(control.value)) {
      return { 'emailInvalid': true };
    }
    return null;
  }
}
