import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //client http for api requests
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Lucca&appid=720a970b6fd3940fc83823c98549ec0b'; //api request url
  private response = ''; //api response
  constructor(private http:HttpClient) { }
   
  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({ 
        // 'Access-Control-Allow-Origin':'*',
        // 'Authorization':'003e570061bc25ca6222bed2be5f4ae2',
      })
    };
    // const headers = {'appid' : '003e570061bc25ca6222bed2be5f4ae2'};
    this.http.get<any>(this.apiUrl).subscribe(data =>{
      this.response = data;
      console.log(this.response);

    })
    
  }

}
