import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AppserviceService } from '../appservice.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  actualList:String[]=[]
  actualUser:String
  selected:String
  originalText:String
  encrypText:String

  constructor(public appService:AppserviceService,public auth:AuthService) { }

  ngOnInit(): void {
    this.actualList=this.appService.getList()
    
  }
  setActualUser(){
    //console.log(text)
    this.actualUser=this.appService.getUser()
    this.actualList=this.appService.getList()
  }

  clickFavorite(text:String){
    this.selected=text
    this.originalText=text

  }

  deleteFavorite(){
    var text= this.selected
    var index = this.appService.getList().indexOf(text)
    delete this.appService.getList()[index]
  }

  saveFavorite(){
    this.appService.getList().push(this.originalText)
  }

  cypherText(){
    var s = this.originalText;
    var chr, i = 0, l = s.length, out = '';
    for( ; i < l; i ++ ){
        chr = s.charCodeAt( i ).toString( 2 );
        while( chr.length % 8 != 0 ){ chr = '0' + chr; }
        out += chr;
    }
    this.encrypText=out
    
  }
}
