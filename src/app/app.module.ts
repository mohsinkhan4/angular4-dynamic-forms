import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { TextComponent } from './components/dynamic-form-field-types/text/text.component';
import { DropdownComponent } from './components/dynamic-form-field-types/dropdown/dropdown.component';
import { DateComponent } from './components/dynamic-form-field-types/date/date.component';
import { RangeComponent } from './components/dynamic-form-field-types/range/range.component';

@NgModule({
    imports: [ 
        BrowserModule, 
        ReactiveFormsModule 
    ],
    declarations: [ 
        AppComponent, 
        DynamicFormComponent, 
        DynamicFormFieldComponent, 
        TextComponent,
        DropdownComponent,
        DateComponent, 
        RangeComponent
    ],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule {
    
    constructor() {}
    
}