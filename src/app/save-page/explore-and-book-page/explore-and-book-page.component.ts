import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-explore-and-book-page',
  templateUrl: './explore-and-book-page.component.html',
  styleUrls: ['./explore-and-book-page.component.scss']
})
export class ExploreAndBookPageComponent implements OnInit {
  project_id : string = "";
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      if(params['project_id']){
        this.project_id = params['project_id'];
      }
    })
  }

  ngOnInit() {
  }

}
