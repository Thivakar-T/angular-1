import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private _baseUrl = 'https://5fd6ee409dd0db0017ee8a2e.mockapi.io/PRODUCT';
  
 
  private _students = this._baseUrl ;
  
  
  constructor(private http : HttpClient) { }
  
  addStudent(data :any){
    console.log('1');
  return this.http.post<any>(this._students,data);
  }

  getAllStudents(){
    return this.http.get<any>(this._students);
    }
    getOneData(id :any){
      return this.http.get<any>(this._students + '/' + id );
    }   
    editOneData(id :any,data:any){
      return this.http.put<any>(this._students + '/' + id,data);
    }

    removeOneData(id:any){
      return this.http.delete<any>(this._students + '/' + id);
    }

}
