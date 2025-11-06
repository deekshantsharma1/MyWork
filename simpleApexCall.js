import { LightningElement, track } from 'lwc';
import getCurrentUserName from '@salesforce/apex/UserController.getCurrentUserName';

export default class SimpleApexCall extends LightningElement {
    @track userName;

    connectedCallback() {
        getCurrentUserName()
            .then(result => {
                this.userName = result;
            })
            .catch(error => {
                this.userName = 'Error loading user name';
                console.error(error);
            });
    }
}
