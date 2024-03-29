import { Component } from '@angular/core';
import { FormationFormComponent } from '../formation-form/formation-form.component';

@Component({
  selector: 'app-formation-create-view',
  standalone: true,
  imports: [FormationFormComponent],
  templateUrl: './formation-create-view.component.html',
  styleUrl: './formation-create-view.component.css'
})
export class FormationCreateViewComponent {

}
