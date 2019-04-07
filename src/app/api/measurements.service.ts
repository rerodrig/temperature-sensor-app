import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { TemperatureMeasurement } from '../models/measurements.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  apiUrl: string = 'https://temperature-sensor-api.herokuapp.com/v1/temperature-measurements';

  constructor(
    private http: HttpClient
  ) { }

  public findAll(pageNumber: number, pageSize: number) {
    return this.http.get<TemperatureMeasurement[]>(`${this.apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
 }
}
