import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String = 'weather-whip-test';
  
  constructor() { }

  ngOnInit(): void {
  }
  testFunction(){
    console.log("test function");
    
  }
  testFunction2(){
    console.log("test function 2");
    
  }
}
