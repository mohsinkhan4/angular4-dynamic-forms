import { FormField }     from '../models/form-field';

export class DynamicFormFieldService {

    getFormFields() {
        const formControlsFromService = this.getFormMetadataJson().controls;

        const formFields: FormField[] = formControlsFromService.map(
            (formControl) => {

                const formField = new FormField({
                    'disabled': formControl['disabled'],
                    'errorMessages': formControl['errorMessages'],
                    'id': formControl['id'],
                    'key': formControl['key'],
                    'label': formControl['label'],
                    'mandatory': formControl['mandatory'],
                    'maxlength': formControl['maxlength'],
                    'path': formControl['path'],
                    'selectorControl': formControl['selectorControl'],
                    'type': formControl['type'],
                    'value': formControl['value'],
                });

                return formField;
            }
        )

        return formFields;
    }

    getFormMetadataJson() {

        return {
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