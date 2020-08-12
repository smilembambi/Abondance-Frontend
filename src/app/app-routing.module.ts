import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./views/app/auth/login/login.component";
import {BaseComponent} from "./views/shared/base/base.component";
import {AuthGuard} from "./core/helpers";
import {AuthModule} from "./views/app/auth/auth.module";
import {HomeComponent} from "./views/app/home/home.component";
import {FormationComponent} from "./views/app/formation/formation.component";
import {AgendaComponent} from "./views/app/agenda/agenda.component";
import {EliteComponent} from "./views/app/elite/elite.component";
import {FinancementComponent} from "./views/app/financement/financement.component";
import {EngagementComponent} from "./views/app/engagement/engagement.component";
import {ContactComponent} from "./views/app/contact/contact.component";
import {CategorieComponent} from "./views/app/categorie/categorie.component";
import {FormationsComponent} from "./views/app/formations/formations.component";
import {InscriptionComponent} from "./views/app/inscription/inscription.component";
import {PlusdateComponent} from "./views/app/plusdate/plusdate.component";



const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formation/:id', component: FormationComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'plusdate', component: PlusdateComponent },
  { path: 'inscription/:id', component: InscriptionComponent },
  { path: 'categorie/:id', component: CategorieComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'elite', component: EliteComponent },
  { path: 'financement', component: FinancementComponent },
  { path: 'engagement', component: EngagementComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
  },

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    //Composants


    //Module App
    AuthModule,


  ]
})
export class AppRoutingModule { }
