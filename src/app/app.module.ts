import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarmentsComponent } from './garments/garments.component';
import {HttpClientModule} from '@angular/common/http';
import { GarmentsEditComponent } from './garments-edit/garments-edit.component';
import { GarmentsCreateComponent } from './garments-create/garments-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GarmentsComponent,
    GarmentsEditComponent,
    GarmentsCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
