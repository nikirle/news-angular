import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private services:NewsapiserviceService) {}

  topHeadingDisplay:any=[];

  ngOnInit(): void {

    this.services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay=result.articles; 
    })  
  }
}
