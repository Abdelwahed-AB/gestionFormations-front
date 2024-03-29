import { Component, Input } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import Formation from '../../models/formation.model';
import { FormationService } from '../../services/formation.service';
import { ActivatedRoute, Router } from '@angular/router';

type Action = "create" | "update";

@Component({
  selector: 'app-formation-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formation-form.component.html',
  styleUrl: './formation-form.component.css'
})
export class FormationFormComponent {
  @Input({required: true}) action :Action;
  @Input() formTitle :string;
  @Input() formation: Formation = {
    id : 0,
    titre : "",
    description : "",
    dateDebut: new Date(),
    dateFin : new Date(),
  };

  constructor(private formationService :FormationService, private router: Router){}

  createFormation(){
    this.formationService.createFormation(this.formation);
  }

  updateFormation(){
    this.formationService.updateFormation(this.formation);
  }

  submit(){
    switch(this.action){
      case 'create':
        this.createFormation();
        break;
      case 'update':
        this.updateFormation();
        break;
    }

    this.formation = {
      id : 0,
      titre : "",
      description : "",
      dateDebut: new Date(),
      dateFin : new Date(),
    };

    this.back();
  }

  back(){
    this.router.navigate(["/"]);
  }
}
