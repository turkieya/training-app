import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {
  path: 'list',
  component: SessionItemListComponent},
  {
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    PagenotfoundComponent
  ],
  imports: [
   // CommonModule
   RouterModule.forRoot(appRoutes,{ enableTracing: true }),
   BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
