import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../../models/form-field';
import { DynamicFormFieldControlService } from '../../services/dynamic-form-field-control.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ DynamicFormFieldControlService ]
})
export class DynamicFormComponent implements OnInit {

    @Input() dfFormFields: FormField[] = [];
    dfForm: FormGroup;

    constructor(private formFieldControlService: DynamicFormFieldControlService) {  }

    ngOnInit() {
        this.dfForm = this.formFieldControlService.formFieldsToFormGroup(this.dfFormFields);
    }

    onSubmit() {
        console.log(this.dfForm.value);
    }
}