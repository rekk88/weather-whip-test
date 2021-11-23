import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'; //client http for api requests

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService {

  constructor() { }
}
