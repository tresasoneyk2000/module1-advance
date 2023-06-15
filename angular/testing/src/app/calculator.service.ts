import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
  facorial(a:number){
    let result=1;
    for(let i=1;i<=a;i++){
      result=result*i

    }
    return result;

  }
}

