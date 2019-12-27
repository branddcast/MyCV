import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  { CurriculumService } from './curriculum.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCV';

  private curriculum = null;
  @Output() multiplo10 = new EventEmitter();

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  }

  borders: string[] = [
    'borde-azul',
    'borde-amarillo',
    'borde-verde',
    'borde-rojo'
  ];

  border : string;

  constructor(private curriculumService: CurriculumService) {}

  ngOnInit() {
    this.curriculumService.curriculum()
      .subscribe( result =>  this.curriculum = result);
    //this.border = this.borders[Math.trunc(Math.random() * this.borders.length) + 1];
  }
}
