import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Membre from '../models/membre.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembreService {
  private membreUrl :string = "http://localhost:8080/membres"

  membres :BehaviorSubject<Membre[]> = new BehaviorSubject<Membre[]>([]);
  membresInFormation :BehaviorSubject<Membre[]> = new BehaviorSubject<Membre[]>([]);

  constructor(private http: HttpClient) {
    this.getAllMembres();
  }

  getAllMembres(){
    this.http.get<Membre[]>(this.membreUrl).subscribe((data) => this.membres.next(data));
  }

  getMembresByFormation(formationId :number){
    this.http.get<Membre[]>(this.membreUrl+`?formation=${formationId}`).subscribe((data) => this.membresInFormation.next(data));
  }

  getMembreById(id: number){
    return this.http.get<Membre>(this.membreUrl + `/${id}`);
  }

  deleteMembreById(id :number){
    this.http.delete(this.membreUrl + `/${id}`).subscribe(()=>this.getAllMembres());
  }

  createMembre(membre :Membre){
    this.http.post(this.membreUrl, membre).subscribe(()=>this.getAllMembres());
  }

  updateMembre(membre :Membre){
    this.http.put(this.membreUrl + `/${membre.id}`, membre).subscribe(()=>this.getAllMembres());
  }
}
