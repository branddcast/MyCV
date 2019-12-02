import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http: HttpClient, private router : Router) {}

  curriculum() {
    return this.http.get(window.location.href/*this.router.url*/ + "assets/bio.json");
  }
}
