import { Component, OnInit } from '@angular/core';
import { TemperatureMeasurement } from '../../models/measurements.interface';
import { MeasurementsService } from '../../api/measurements.service';

@Component({
  selector: 'app-measurements-list',
  templateUrl: './measurements-list.component.html',
  styleUrls: ['./measurements-list.component.scss']
})
export class MeasurementsListComponent implements OnInit {

  measurements: TemperatureMeasurement[] = [];
  pageNumber: number = 1;
  pageSize: number = 1;
  total: number = 100;
  noMoreData: boolean;

  constructor(private measurementService: MeasurementsService) { }

  ngOnInit() {}

  findAll(pageNumber: number){
    this.measurementService.findAll(this.pageNumber, this.pageSize).subscribe(measurements => {
      if(this.pageNumber > 1 && measurements.length == 0){
        this.noMoreData = true;
      }
      this.measurements = this.measurements.concat(measurements);
    });
  }

  list(){
    this.pageNumber = 1;
    this.measurements = [];
    this.findAll(this.pageNumber);
  }

  loadMore(){
    this.pageNumber = this.pageNumber + 1;
    this.findAll(this.pageNumber);
  }

}
