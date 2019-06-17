import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { PlacesComponent } from './places/places.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes :Routes = [
  {
    path:'users',
    component: UsersComponent
  },
  {
    path: 'places',
    component: PlacesComponent
  },
  {
    path:'',
    component: UsersComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsersComponent,
    PlacesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
