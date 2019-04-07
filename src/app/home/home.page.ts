import { Component } from '@angular/core';
import { TemperatureMeasurement } from './home.interface';
import { MeasurementsService } from '../api/measurements.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  measurements: TemperatureMeasurement[] = [];
  text:string;

  constructor(private measurementService: MeasurementsService){
    //this.measurements.push({sensorId: "test", temperature: 0, latitude: 0, longitude:0, measurementDateTime:"2019-04-06T14:51:00"});

    this.measurementService.findAll().subscribe(measurements => {
      this.measurements = measurements;
    });
    console.log(this.measurements);


  }

}
