import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Formation from '../models/formation.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formationsUrl :string = "http://localhost:8080/formations"

  formations : BehaviorSubject<Formation[]> = new BehaviorSubject<Formation[]>([]);
  name :string = "";

  constructor(private http: HttpClient) {
    this.getAllFormations();
  }

  getAllFormations(){
    this.http.get<Formation[]>(this.formationsUrl + `?name=${this.name}`).subscribe((data)=> this.formations.next(data));
  }

  getFormationByID(id: number){
    return this.http.get<Formation>(this.formationsUrl + `/${id}`);
  }

  deleteFormationById(id: number){
    this.http.delete<Formation>(this.formationsUrl + `/${id}`).subscribe(()=> this.getAllFormations());
  }

  createFormation(formation :Formation){
    this.http.post<Formation>(this.formationsUrl, formation).subscribe(()=>this.getAllFormations());
  }

  updateFormation(formation :Formation){
    this.http.put<Formation>(this.formationsUrl + `/${formation.id}`, formation).subscribe(()=> this.getAllFormations());
  }
}
