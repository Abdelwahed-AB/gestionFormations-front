import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import InscriptionDto from '../models/inscription.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  inscriptionUrl :string = "http://localhost:8080/inscription"

  constructor(private http: HttpClient) { }

  inscrire(membreId :number, formationId :number){
    let inscriptionDto : InscriptionDto = {
      membreId,
      formationId
    };
    return this.http.post<InscriptionDto>(this.inscriptionUrl, inscriptionDto);
  }

  deinscrire(membreId :number, formationId :number){
    let inscriptionDto :InscriptionDto = {
      membreId,
      formationId
    };

    return this.http.request('delete', this.inscriptionUrl, {body: inscriptionDto});
  }
}
