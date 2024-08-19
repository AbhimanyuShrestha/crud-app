import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }


  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let errorMessage = '';
    switch (validatorName) {
      case 'required':
        errorMessage = 'Field is required'
        break
      case 'notANumber':
        errorMessage = 'Please enter numbers only'
        break
      default:
        errorMessage = 'error'
        break
    }

    return errorMessage
  }


  static numberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value == null) {
      return null;
    }
    const valueStr = value.toString();

    if (/^\d+(\.\d+)?$/.test(valueStr)) {
      return null;
    }
    return { notANumber: true }; 
  };

}

