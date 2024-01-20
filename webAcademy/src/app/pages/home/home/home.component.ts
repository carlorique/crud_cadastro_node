import { HomeService } from './../../../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private HomeService: HomeService) { }

  ngOnInit(): void {
    this.getHome();
  }
  getHome(): void{
    this.HomeService.getAlunos()
    .subscribe(home => this.HomeService)
  }
}
