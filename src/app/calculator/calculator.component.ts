import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  operations: string[] = ['+', '-', '*', '/'];
  selectedOperation: string = '';

  ngOnInit() {
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
  }

  defineOperation(operation: string) {
    this.selectedOperation = operation;
  }

  calculate() {
    if (this.selectedOperation === '+') {
      this.result = this.number1 + this.number2;
    } else if (this.selectedOperation === '-') {
      this.result = this.number1 - this.number2;
    } else if (this.selectedOperation === '*') {
      this.result = this.number1 * this.number2;
    } else if (this.selectedOperation === '/') {
      this.result = this.number1 / this.number2;
    } else {
      this.result = 0;
    }
  }
}
