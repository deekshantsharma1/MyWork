import { LightningElement } from 'lwc';

export default class DynamicCalculator extends LightningElement {
    firstNumber = 0;
    secondNumber = 0;

    handleFirstChange(event) {
        this.firstNumber = parseFloat(event.target.value) || 0;
    }

    handleSecondChange(event) {
        this.secondNumber = parseFloat(event.target.value) || 0;
    }

    get sum() {
        return this.firstNumber + this.secondNumber;
    }

    get difference() {
        return this.firstNumber - this.secondNumber;
    }

    get product() {
        return this.firstNumber * this.secondNumber;
    }

    get quotient() {
        return this.secondNumber !== 0 ? (this.firstNumber / this.secondNumber).toFixed(2) : 'Undefined';
    }
}
