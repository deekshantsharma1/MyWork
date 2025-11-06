import { LightningElement } from 'lwc';

export default class ToggleVisibility extends LightningElement {
    showMessage = false;

    toggleMessage(event) {
        this.showMessage = event.target.checked;
    }
}
