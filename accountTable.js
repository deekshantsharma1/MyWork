import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountTable extends NavigationMixin(LightningElement) {
    accounts = [];
    columns = [
        {
            label: 'Account Name',
            fieldName: 'accountLink',  // New field that will contain the record link
            type: 'url',
            typeAttributes: {
                label: { fieldName: 'Name' }, // Use the Name field as the display label
                target: '_blank'
            }
        },
        { label: 'Phone', fieldName: 'Phone' },
        { label: 'Website', fieldName: 'Website' },
        { label: 'Industry', fieldName: 'Industry' },
        { label: 'Type', fieldName: 'Type' }
    ];

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data.map(account => ({
                ...account,
                accountLink: '/' + account.Id  // Generate the link to the Account record page
            }));
        } else if (error) {
            console.error(error);
        }
    }

    handleRowAction(event) {
        const row = event.detail.row;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: row.Id,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }

    handleNewClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }
}
