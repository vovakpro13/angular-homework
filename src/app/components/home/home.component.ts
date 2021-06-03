import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isHouse: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHousePosition(): void{
    this.isHouse = !this.isHouse;
  }
}
