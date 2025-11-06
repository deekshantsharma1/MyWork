import { LightningElement, track, wire } from 'lwc';
import getPicklistValues from '@salesforce/apex/PicklistHelper.getPicklistValues';
import createAccount from '@salesforce/apex/PicklistHelper.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class StateMultiPicklist extends LightningElement {
    @track picklistValues = [];
    @track selectedValues = new Set();

    // Fetch picklist values from Apex
    @wire(getPicklistValues)
    wiredPicklistValues({ error, data }) {
        if (data) {
            this.picklistValues = data.map(value => ({ label: value, value }));
        } else if (error) {
            console.error('Error fetching picklist values', error);
        }
    }

    // Handle checkbox selection
    handleCheckboxChange(event) {
        const value = event.target.value;
        if (event.target.checked) {
            this.selectedValues.add(value);
        } else {
            this.selectedValues.delete(value);
        }
    }

    // Handle form submission
    handleSubmit() {
        if (this.selectedValues.size === 0) {
            this.showToast('Error', 'Please select at least one state', 'error');
            return;
        }

        const selectedArray = Array.from(this.selectedValues);
        createAccount({ selectedValues: selectedArray })
            .then(result => {
                this.showToast('Success', 'Account created successfully!', 'success');
                this.selectedValues.clear(); // Reset selection
                this.template.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            })
            .catch(error => {
                console.error('Error creating account', error);
                this.showToast('Error', 'Failed to create account', 'error');
            });
    }

    // Utility function to show toast messages
    showToast(title, message, variant) {
        const event = new ShowToastEvent({ title, message, variant });
        this.dispatchEvent(event);
    }
}
