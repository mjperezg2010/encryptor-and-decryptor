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

  constructor(public appService:AppserviceService,public auth:AuthService) { }

  ngOnInit(): void {
    this.actualList=this.appService.getList()
  }

}
