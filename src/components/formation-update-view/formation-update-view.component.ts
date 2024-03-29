import { Component } from '@angular/core';
import { FormationFormComponent } from '../formation-form/formation-form.component';
import { FormationsListComponent } from '../formations-list/formations-list.component';
import Formation from '../../models/formation.model';
import { FormationService } from '../../services/formation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-update-view',
  standalone: true,
  imports: [FormationFormComponent, FormationsListComponent],
  templateUrl: './formation-update-view.component.html',
  styleUrl: './formation-update-view.component.css'
})
export class FormationUpdateViewComponent {
  formation :Formation;

  constructor(private formationService: FormationService, private route: ActivatedRoute){
  }

  ngOnInit(){
    this.route.params.subscribe(params =>{
      let id :number =  params["id"];
      this.formationService.getFormationByID(id).subscribe(formation => this.formation = formation);
    });
  }
}
