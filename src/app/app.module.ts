import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes, Router} from '@angular/router'; //pour definir les routages
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CarteComponent } from './carte/carte.component';
import { HomeComponent } from './home/home.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DishTableComponent } from './dish-table/dish-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {QuickLunchService} from './services/quick-lunch.service';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import{MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';

import {MAT_DATE_LOCALE} from '@angular/material/core';
import { ScheduleComponent } from './schedule/schedule.component';
import { PhoneComponent } from './phone/phone.component'

const routes: Routes=[ //le ': Routes' permet de typer
  {path: '', component: HomeComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'reserve', component:ReserveComponent},
  {path: 'schedule', component:ScheduleComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CarteComponent,
    HomeComponent,
    ReserveComponent,
    ContactComponent,
    MainDashComponent,
    DishTableComponent,
    ScheduleComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, //?? ajouter pour naviguer entre les page, donc pour completer le routage
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [{provide:MAT_DATE_LOCALE, useValue:'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
