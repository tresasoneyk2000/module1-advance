import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

// describe('CalculatorService', () => {
//   let service: CalculatorService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalculatorService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('CalculatorService', () => {
  let calculator: CalculatorService;

  beforeEach(() => {
    calculator = new CalculatorService();
  });

  it('should add two numbers', () => {
    const result = calculator.add(3, 4);
    expect(result).toBe(7);
  });

  it('should subtract two numbers', () => {
    const result = calculator.subtract(7, 3);
    expect(result).toBe(4);
  });
  it('factorialof number', () =>{
    const result= calculator.facorial(5);
    expect(result).toBe(12);
  } )
});
