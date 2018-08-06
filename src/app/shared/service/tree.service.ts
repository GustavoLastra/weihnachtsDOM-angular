import { Injectable } from '@angular/core';
import {InitialLedList} from '../data';
import {BehaviorSubject} from "rxjs/index";
import {Led} from '../model/led'

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  actualTree$= new BehaviorSubject<Led[]>(InitialLedList);


  constructor() {
  }

  turn(id: string, newButtonState: boolean) {
    console.log("id: " + id);
    let temp:Led[]= this.actualTree$.getValue();
    let found: boolean = false;
    this.scan(temp, id, newButtonState, found)
    this.actualTree$.next(temp);
  }

  scan(obj:Led[], id: string, newButtonState: boolean, found: boolean){
    if (found===true) {
      obj.map(led =>{
        led.buttonState = newButtonState;
        this.scan(led.ledList, id, newButtonState, found);
      })
    } else {
      obj.map(led =>{
        if (led.id === id) {
          found = true;
          led.buttonState = newButtonState;
          return this.scan(led.ledList, id, newButtonState, found);
        } else if(found===false){
          //recursion
          return this.scan(led.ledList, id, newButtonState, found);
        }
      })
    }
  };
}
