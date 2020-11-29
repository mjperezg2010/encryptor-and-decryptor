import { Injectable } from '@angular/core';
import {Text} from './classes/text'
import {AuthService} from '@auth0/auth0-angular'

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

  //Actual Text
  actualText:Text = {
    user: '',
    texts: []
  }

  constructor() { }

  //Functions
  getList(){
    
    return this.actualText.texts

  }

  getUser(){
    return this.actualText.user
  }

  setUser(mail:String){
   
    for (let i = 0; i < this.list.length; i++) {
      
      if (mail == this.list[i].user) {
        this.actualText=this.list[i]
        break
      }
      
      
    }

    
  }

}
