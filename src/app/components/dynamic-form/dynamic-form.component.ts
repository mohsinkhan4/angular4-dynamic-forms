import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicForm } from '../../models/df-form';
import { DynamicFormFieldControlService } from '../../services/dynamic-form-field-control.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ DynamicFormFieldControlService ]
})
export class DynamicFormComponent implements OnInit {

    @Input() dynamicForm: DynamicForm; 
    dfFormGroup: FormGroup;

    constructor(private formFieldControlService: DynamicFormFieldControlService) {  }

    ngOnInit() {
        const sections = this.dynamicForm.getSections();
        this.dfFormGroup = this.formFieldControlService.getFormGroups(sections);
    }

    onSubmit() {
        console.log(this.dfFormGroup.value);
    }
}