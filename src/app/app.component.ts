import { Component, OnInit } from '@angular/core';
import  { CurriculumService } from './curriculum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCV';

  private curriculum = null;

  constructor(private curriculumService: CurriculumService) {}

  ngOnInit() {
    this.curriculumService.curriculum()
      .subscribe( result =>  this.curriculum = result)
  }
}
