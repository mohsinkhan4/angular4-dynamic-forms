import { Component }       from '@angular/core';

import { DynamicFormFieldService } from './services/dynamic-form-field.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers:  [DynamicFormFieldService]
})
export class AppComponent {

    dfFormFields: any[];

    constructor(dfFormFieldService: DynamicFormFieldService) {
        this.dfFormFields = dfFormFieldService.getFormFields();
    }

}

