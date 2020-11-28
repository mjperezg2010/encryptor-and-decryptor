import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  actualList:String[]=[]
  actualUser:String

  constructor(public appService:AppserviceService) { }

  ngOnInit(): void {

  }

}
