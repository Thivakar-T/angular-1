import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: any = {};
  id: any;
  constructor(
    private _carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.getOneProfile();
    }
  }
  getOneProfile() {
    this.id;
    this._carService.getOneData(this.id).subscribe(res => {
    console.log(res);
    this.cars = res;
  })
  }
  submit() {
    
    if (this.id) {
      this._carService.editOneData(this.id, this.cars).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/car-list');
      })
    }
  else{
    console.log(this.cars);
    this._carService.addStudent(this.cars).subscribe(res => {
    console.log(res);
    this.router.navigateByUrl('/car-list');
   
     }, err => {
      console.log(err);
    } )
  }
}
}
