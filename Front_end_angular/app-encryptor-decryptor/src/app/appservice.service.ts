import { Injectable } from '@angular/core';
import {Text} from './classes/text'

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  //A temporal list with data for the app
  list:Text[]=[
    {
      user: 'mjperezg2010@gmail.com',
      texts: ['A new note','New notes']
    },
    {
      user: 'mjperezg2010@hotmail.com',
      texts: ['Numbers','Fruits']
    }
  ]

  constructor() { }

  //Functions
  getList(){
    return this.list
    
  }
}
