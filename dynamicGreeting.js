import { LightningElement } from 'lwc';

export default class DynamicGreeting extends LightningElement {
    name = 'Guest';

    handleNameChange(event) {
        this.name = event.target.value;
    }

    get greetingMessage() {
        const hour = new Date().getHours();
        let greeting = 'Hello';

        if (hour < 12) greeting = 'Good morning';
        else if (hour < 18) greeting = 'Good afternoon';
        else greeting = 'Good evening';

        return `${greeting}, ${this.name}!`;
    }
}
