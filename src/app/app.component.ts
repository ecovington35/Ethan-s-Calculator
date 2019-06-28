import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  subText = '';
  mainText: any;
  operand1: number;
  operand2: number;
  operator = '';
  calculationString = '';

  answered = false;
  operatorSet = false;

pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '+' || key === '-')  {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '+') {
      this.operatorSet = true;
    }
      if ((this.operatorSet) || (this.mainText === '')) {
      return;
    }
      this.operand1 = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainText.length === 11) {
      return;
    }
    this.mainText += key;
    }
    getAnswer() {
      this.calculationString = this.mainText;
      this.operand2 = parseFloat (this.mainText.split(this.operator)[1]);
      if (this.operator === '/') {
        this.mainText = (this.operand1 / this.operand2).toString();
        if (this.mainText.length > 10) {
          this.mainText = this.mainText.substr(0, 11);
        }
      } else if (this.operator === 'x') {
        this.mainText = (this.operand1 * this.operand2).toString();
        if (this.mainText.length > 10) {
          this.mainText = 'ERROR';
          this.subText = 'Range Exceeded';
        }
      } else if (this.operator === '-') {
        this.mainText = (this.operand1 - this.operand2).toString();
        if (this.mainText.length > 10) {
          this.mainText = 'ERROR';
          this.subText = 'Range Exceeded';
        }
      } else if (this.operator === '+') {
        this.mainText = (this.operand1 + this.operand2).toString();
        if (this.mainText.length > 10) {
          this.mainText = 'ERROR';
          this.subText = 'Range Exceeded';
        }
  } else {
    this.subText = 'ERROR: Invalid Operation';
  }
      this.answered = true;
      this.operatorSet = false;
}
allClear() {
  this.mainText = '';
  this.subText = '';
  this.answered = false;
  this.operatorSet = false;
}
percentKey() {
  this.mainText = ( this.mainText * .01 ).toString();
}
negative() {
  this.mainText = ( this.mainText * -1 ).toString();
}
squared() {
  this.mainText = ( this.mainText * this.mainText ).toString();
}
}
