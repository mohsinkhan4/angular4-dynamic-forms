import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { TextComponent } from './components/dynamic-form-field-types/text/text.component';
import { DropdownComponent } from './components/dynamic-form-field-types/dropdown/dropdown.component';
import { DateComponent } from './components/dynamic-form-field-types/date/date.component';
import { RangeComponent } from './components/dynamic-form-field-types/range/range.component';
import { DynamicFormSectionComponent } from './components/dynamic-form-section/dynamic-form-section.component';
import { SectionTabbedComponent } from './components/dynamic-form-section-types/tabbed/tabbed.component';
import { SectionListComponent } from './components/dynamic-form-section-types/list/list.component';
import { DesignerRootComponent } from './designer/root/designer-root.component';

@NgModule({
    imports: [ 
        BrowserModule, 
        ReactiveFormsModule ,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent, 
        DynamicFormComponent, 
        DynamicFormFieldComponent, 
        TextComponent,
        DropdownComponent,
        DateComponent, 
        RangeComponent, 
        DynamicFormSectionComponent, 
        SectionTabbedComponent, 
        SectionListComponent, 
        DesignerRootComponent
    ],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule {
    
    constructor() {}
    
}