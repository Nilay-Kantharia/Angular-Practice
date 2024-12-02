import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private bgColor1Subject = new BehaviorSubject<string>('#fffff');
  private bgColor2Subject = new BehaviorSubject<string>('#fffff');
  getBgColor1(){
    return this.bgColor1Subject.asObservable();
  }
  getBgColor2(){
    return this.bgColor2Subject.asObservable();
  }
  setBgColor1(color:string): void{
    this.bgColor1Subject.next(color);
  }
  setBgColor2(color:string): void{
    this.bgColor2Subject.next(color);
  }
}
