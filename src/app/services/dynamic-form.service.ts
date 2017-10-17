import { Injectable } from '@angular/core';

import { FormField as DynamicFormField }     from '../models/form-field';
import { DynamicFormSection }     from '../models/df-form-section';
import { DynamicForm } from '../models/df-form';

import { DynamicFormSectionService } from './dynamic-form-section.service';
import { DynamicFormFieldService } from './dynamic-form-field.service';

@Injectable()
export class DynamicFormService {

    form : DynamicForm;

    constructor(private dynamicFormSectionService: DynamicFormSectionService, private dynamicFormFieldService: DynamicFormFieldService) {
        const metadata = this.getFormMetadataJson();
        this.dynamicFormFieldService.initControls(metadata['controls']);

        this.form = new DynamicForm({ 
            'sections' : this.dynamicFormSectionService.getFormSections(metadata['containers'])
        });
    }

    getForm() : DynamicForm {
        return this.form;
    }

    getFormMetadataJson() : Object {

        return {
            "containers": [
                {
                    "key": "dc_create_data_collector1",
                    "type": "SECTION",
                    "controllist": [
                        {
                            "key": "dc_name",
                            "type": "field"
                        },
                        {
                            "key": "dc_type",
                            "type": "field"
                        }
                    ],
                    "label": "fbt_create_data_collector1"
                },
                {
                    "key": "dc_create_data_collector2",
                    "type": "SECTION",
                    "controllist": [
                        {
                            "key": "dc_date",
                            "type": "field"
                        },
                        {
                            "key": "dc_range",
                            "type": "field"
                        }
                    ],
                    "visible": false
                }
            ],
            "controls": [
                {
                    "id": "dc_name",
                    "key": "dc_name",
                    "label": "fbt_name",
                    "type": "TEXT",
                    "disabled": false,
                    "mandatory": true,
                    "maxlength": 100,
                    "path": ".",
                    "value": "Hello World !!",
                    "errorMessages": {
                        "REQUIRED_ERROR": "fbt_REQUIRED_ERROR_instance_name"
                    }
                },
                {
                    "id": "dc_type",
                    "key": "dc_type",
                    "label": "fbt_type",
                    "type": "DROPDOWN",
                    "disabled": false,
                    "selectorControl": {
                        "defaultValue": "LOCAL_FILE",
                        "options": {
                            "LOCAL_FILE": "fbt_option_local_file",
                            "PULL": "fbt_option_pull",
                            "SMBPULL": "fbt_option_smbpull",
                            "SCRIPTPULL": "fbt_option_scriptpull",
                            "LOCAL_SCRIPTPULL": "fbt_option_local_scriptpull",
                            "WBEM_PULL": "fbt_option_wbem_pull",
                            "LOCAL_WINDOWS_EVENTS": "fbt_option_local_windows_events",
                            "INTEGRATION": "fbt_option_integration",
                            "PORT_PUSH": "fbt_option_port_push",
                            "REST_END_POINT": "fbt_option_rest_end_point",
                            "FILE_UPLOAD": "fbt_option_file_upload"
                        }
                    },
                    "mandatory": true,
                    "path": "."
                },
                {
                    "id": "dc_date",
                    "key": "dc_date",
                    "label": "fbt_date",
                    "type": "DATE",
                    "disabled": false,
                    "mandatory": true,
                    "value": (new Date()).getTime()
                },
                {
                    "id": "dc_range",
                    "key": "dc_range",
                    "label": "fbt_range",
                    "type": "RANGE",
                    "minlength": 0,
                    "maxlength": 100,
                    "value": 60
                },
            ]
        };
  }

}