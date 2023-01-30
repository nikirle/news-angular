import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  businessNewsDesplay:any=[]

  constructor(private service : NewsapiserviceService) { }

  ngOnInit(): void {

    this.service.businessNews().subscribe((result=>{
      this.businessNewsDesplay=result.articles
    }))


  }

}
