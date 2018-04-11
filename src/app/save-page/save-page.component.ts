import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-save-page',
  templateUrl: './save-page.component.html',
  styleUrls: ['./save-page.component.scss']
})
export class SavePageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotToExploreAndBook(){
    this.router.navigate(['/save/explore-and-book','ProjectIdComesHere']);
  }

}
