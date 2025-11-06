import { LightningElement, api, track } from 'lwc';
import getRecords from '@salesforce/apex/MassEditController.getRecords';
import updateRecords from '@salesforce/apex/MassEditController.updateRecords';

export default class MassEditRecords extends LightningElement {

    @api recordIds = [];
    @track records = [];
    draftValues = [];


    columns = [
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Phone', fieldName: 'Phone', editable: true },
        { label: 'Website', fieldName: 'Website', editable: true },
        { label: 'Industry', fieldName: 'Industry', editable: true },
        { label: 'Type', fieldName: 'Type', editable: true }
    ];
}