import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //client http for api requests



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20'; //api request url
  private response = ''; //api response
  constructor(private http:HttpClient) { }
   
  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data =>{
      this.response = data;
    })
  }

}
