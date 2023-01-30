import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  techNewsDisplay:any=[]

  constructor( private services:NewsapiserviceService) { }

  ngOnInit(): void {

    this.services.techNews().subscribe((result=>{
        this.techNewsDisplay=result.articles
    }))
  }
 
}
