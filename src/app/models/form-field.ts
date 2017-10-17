interface ErrorMessages {

    REQUIRED_ERROR ?: string

}

interface SelectorControl {

    defaultValue ?: string,
    options ?: Object

}

interface FormFieldConfiguration {

    disabled ?: boolean,
    errorMessages ?: ErrorMessages
    id : string,
    key : string,
    label : string,
    mandatory ?: boolean,
    maxlength ?: number,
    minlength ?: number,
    path ?: string,
    selectorControl ?: SelectorControl,
    type : string,
    value ?: string,

}

export class FormField {
  
    private  disabled: boolean;
    private  errorMessages: ErrorMessages;
    private  id: string;
    private  key: string;
    private  label: string;
    private  mandatory: boolean;
    private  maxlength: number;
    private  minlength: number;
    private  path: string;
    private  selectorControl: SelectorControl
    private  type: string;
    private  value: string;

    constructor(ffg: FormFieldConfiguration) {

        this.disabled = ffg.disabled !== undefined ? !!ffg.disabled : false;
        this.errorMessages = ffg.errorMessages || {};
        this.id = ffg.id;
        this.key = ffg.key;
        this.label = ffg.label;
        this.mandatory = ffg.mandatory !== undefined ? !!ffg.mandatory : false;
        this.maxlength = ffg.maxlength || 256;
        this.minlength = ffg.minlength || 0;
        this.path = ffg.path || '';
        this.selectorControl = ffg.selectorControl ? this.getSelectorControl(ffg.selectorControl) : { 'defaultValue' : null, 'options' : [] };
        this.type = ffg.type;
        this.value = (ffg.type === 'DATE' ? this.getDateValue(ffg.value) : ffg.value) || '';
    }

    getId() : string {
        return this.id;
    }

    getKey() : string {
        return this.key;
    }

    getMandatory() : boolean {
        return this.mandatory;
    }

    getSelectorDefaultValue() : string {
        return this.selectorControl.defaultValue;
    }

    getValue() : string {
        return this.value;
    }
 
    private getSelectorControl(sc: SelectorControl) : SelectorControl {
        return {
            defaultValue : sc.defaultValue,
            options : Object.keys(sc.options).map( 
                (key) => ({ 'key': key, 'value': sc.options[key] }) 
            )
        }
    }

    private getDateValue(value: string) : string {
        const date = new Date(value);
        const d ={
            yyyy : date.getFullYear(),
            mm : date.getMonth() < 10 ? ('0' + date.getMonth()) : date.getMonth(),
            dd : date.getDate()
        }
        return (d.yyyy + '-' + d.mm  + '-' + d.dd);
    }

}