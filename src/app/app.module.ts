import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { SidebarComponent } from './views/shared/sidebar/sidebar.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { DashboardComponent } from './views/theme/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './views/shared/spinner/spinner.component';
import { ContentAnimateDirective } from './views/shared/directives/content-animate.directive';
import {ErrorInterceptor, JwtInterceptor} from "./core/helpers";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BaseComponent} from "./views/shared/base/base.component";
import {MatButtonModule, MatDialogModule, MatSliderModule} from "@angular/material";
import {HomeComponent} from "./views/app/home/home.component";
import {HeaderComponent} from "./views/shared/header/header.component";
import { FooterSiteComponent } from './views/shared/footer-site/footer-site.component';
import { FormationComponent } from './views/app/formation/formation.component';
import { CategorieComponent } from './views/app/categorie/categorie.component';
import { AgendaComponent } from './views/app/agenda/agenda.component';
import { EliteComponent } from './views/app/elite/elite.component';
import { FinancementComponent } from './views/app/financement/financement.component';
import { EngagementComponent } from './views/app/engagement/engagement.component';
import { ContactComponent } from './views/app/contact/contact.component';
import { FormationsComponent } from './views/app/formations/formations.component';
import { InscriptionComponent } from './views/app/inscription/inscription.component';
import { PlusdateComponent } from './views/app/plusdate/plusdate.component';
import {NewletterModule} from "./views/shared/newletter/newletter.module";
import {NewletterComponent} from "./views/shared/newletter/newletter.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    BaseComponent,
    HomeComponent,
    HeaderComponent,
    FooterSiteComponent,
    FormationComponent,
    CategorieComponent,
    AgendaComponent,
    EliteComponent,
    FinancementComponent,
    EngagementComponent,
    ContactComponent,
    FormationsComponent,
    InscriptionComponent,
    PlusdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    NewletterModule


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewletterComponent
  ]
})
export class AppModule { }
