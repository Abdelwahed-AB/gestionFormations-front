import { Component } from '@angular/core';
import { MembreService } from '../../services/membre.service';
import Membre from '../../models/membre.model';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membre-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './membre-list.component.html',
  styleUrl: './membre-list.component.css'
})
export class MembreListComponent {

  membres : Membre[] = [];
  constructor(private membreService : MembreService, private router: Router){}

  ngOnInit(){
    this.membreService.membres.subscribe(data => this.membres = data);
  }

  deleteMembre(id :number){
    if(confirm("Etez-vous sûr?")){
      this.membreService.deleteMembreById(id);
    }
  }

  updateMembre(id :number){
    this.router.navigate(["/membres/update", id]);
  }

  createNew(){
    this.router.navigate(["/membres/create"]);
  }
}
