import { Component, OnInit }  from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicForm } from '../../models/df-form';

import { DynamicFormFieldControlService } from '../../services/dynamic-form-field-control.service';
import { DynamicFormService } from '../../services/dynamic-form.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ DynamicFormFieldControlService ]
})
export class DynamicFormComponent implements OnInit {

    dynamicForm: DynamicForm; 
    dfFormGroup: FormGroup;
    sectionDisplayType: String;

    constructor(private dynamicFormService: DynamicFormService, private formFieldControlService: DynamicFormFieldControlService) {  }

    ngOnInit() {
        this.dynamicForm = this.dynamicFormService.getForm();
        const sections = this.dynamicForm.getSections();
        this.dfFormGroup = this.formFieldControlService.getFormGroups(sections);
        this.sectionDisplayType = 'TABBED'; // TABBED, LIST;
    }

    onSubmit() {
        console.log(this.dfFormGroup.value);
    }
}