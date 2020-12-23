import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  studentArr: any = [];
  id : any;

  constructor(
    private _carService : CarService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._carService.getAllStudents().subscribe(res => {
      this.studentArr = res;
    }, err => {
      console.log(err);
    })
  }

  
  get(id:any) {
    this.id = id;
    this.deleteOneProfile();

  }
  deleteOneProfile() {
    this.id;
   
    this._carService.removeOneData(this.id).subscribe(res => {
    
      this.router.navigateByUrl('/empty', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/car-list']), 0);

    })
  } 

}


