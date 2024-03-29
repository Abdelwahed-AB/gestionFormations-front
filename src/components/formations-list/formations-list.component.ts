import { Component } from '@angular/core';
import Formation from '../../models/formation.model';
import { FormationService } from '../../services/formation.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formations-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './formations-list.component.html',
  styleUrl: './formations-list.component.css'
})
export class FormationsListComponent {
  formations : Formation[];
  searchStr :string;

  constructor(private formationService : FormationService, private router: Router){}

  ngOnInit(){
    this.formationService.formations.subscribe(formations => this.formations = formations);
  }

  deleteFormation(id :number){
    if(confirm("Etez-vous sûr?")){
      this.formationService.deleteFormationById(id);
    }
  }

  updateFormation(id :number){
    this.router.navigate(["/formations/update", id]);
  }

  search(){
    this.formationService.name = this.searchStr;
    this.formationService.getAllFormations();
  }

  createNew(){
    this.router.navigate(["/formations/create"]);
  }

  viewDetails(id :number){
    this.router.navigate(["/formations", id]);
  }
}
