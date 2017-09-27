import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../models/form-field';

export class DynamicFormFieldControlService {

    constructor() { }

    formFieldsToFormGroup(formFields: FormField[] ) {

        const group: any = {};

        formFields.forEach( 
            (formField) => {
            
                const validators = [];
                if(formField.mandatory) validators.push(Validators.required);

                group[formField.key] = new FormControl(formField.value || formField.selectorControl.defaultValue || '', validators);
            }
        );

        return new FormGroup(group);
    }

}
