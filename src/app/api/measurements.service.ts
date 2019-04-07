import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TemperatureMeasurement } from '../home/home.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  apiUrl: string = 'https://temperature-sensor-api.herokuapp.com/v1/temperature-measurements';

  constructor(
    private http: HttpClient
  ) { }

  public findAll() {
    return this.http.get<TemperatureMeasurement[]>(this.apiUrl);
 }
}
