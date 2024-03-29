import { Routes } from '@angular/router';
import { FormationUpdateViewComponent } from '../components/formation-update-view/formation-update-view.component';
import { FormationCreateViewComponent } from '../components/formation-create-view/formation-create-view.component';
import { MembreCreateViewComponent } from '../components/membre-create-view/membre-create-view.component';
import { MembreUpdateViewComponent } from '../components/membre-update-view/membre-update-view.component';
import { MainViewComponent } from '../components/main-view/main-view.component';
import { FormationDetailsComponent } from '../components/formation-details/formation-details.component';

export const routes: Routes = [
  {
    path: "",
    component: MainViewComponent
  },
  {
    path: "formations/:id",
    component: FormationDetailsComponent
  },
  {
    path: "formations/update/:id",
    component: FormationUpdateViewComponent,
  },
  {
    path: "formations/create",
    component: FormationCreateViewComponent
  },
  {
    path: "membres/create",
    component: MembreCreateViewComponent
  },
  {
    path: "membres/update/:id",
    component: MembreUpdateViewComponent
  }
];
