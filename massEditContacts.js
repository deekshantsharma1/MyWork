import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/MassEditController.getContacts';
import updateContacts from '@salesforce/apex/MassEditController.updateContacts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MassEditContacts extends LightningElement {
    @track contacts = [];
    @track selectedContacts = [];
    showModal = false;

    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data.map(contact => ({ ...contact }));
        } else if (error) {
            console.error(error);
        }
    }

    handleSelect(event) {
        const selectedId = event.target.dataset.id;
        if (event.target.checked) {
            this.selectedContacts.push(
                this.contacts.find(con => con.Id === selectedId)
            );
        } else {
            this.selectedContacts = this.selectedContacts.filter(
                con => con.Id !== selectedId
            );
        }
    }

    openModal() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }

    handleChange(event) {
        const index = event.target.dataset.index;
        const field = event.target.name;
        this.selectedContacts[index][field] = event.target.value;
    }

    async handleSave() {
        try {
            await updateContacts({ contactsToUpdate: this.selectedContacts });
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Contacts updated successfully',
                variant: 'success'
            }));
            this.closeModal();
            // Refresh or reload component
        } catch (error) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error',
                message: error.body.message,
                variant: 'error'
            }));
        }
    }
}
