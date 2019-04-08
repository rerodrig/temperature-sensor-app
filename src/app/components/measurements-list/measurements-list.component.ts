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
  pageSize: number = 10;
  noMoreData: boolean;

  constructor(private measurementService: MeasurementsService) { }

  ngOnInit() {}

  findAll(pageNumber: number){
    this.measurementService.findAll(this.pageNumber, this.pageSize).subscribe(measurements => {
      this.handleButtonStateLoadMoreData(measurements.length);
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

  handleButtonStateLoadMoreData(measurementsLength){
    if(this.pageNumber > 1 && measurementsLength == 0){
      this.noMoreData = true;
    }else  if(measurementsLength < this.pageSize){
      this.noMoreData = true;
    }else{
      this.noMoreData = false;
    }
  }

}
