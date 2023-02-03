import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(number1: string, operator: string, number2: string) {
    switch (operator) {
      case '+':
        this.result = parseFloat(number1) + parseFloat(number2);
        break;
      case '-':
        this.result = parseFloat(number1) - parseFloat(number2);
        break;
      case '*':
        this.result = parseFloat(number1) * parseFloat(number2);
        break;
      case '/':
        // tslint:disable-next-line:triple-equals
        if (parseFloat(number2) == 0) {
          this.result = 'Không được phép chia cho 0 !!!';
          break;
        }
        this.result = parseFloat(number1) + parseFloat(number2);
        break;
    }
  }
}
