import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentComponent } from './pages/student/student.component';
import { CreateorupdateComponent } from './pages/createorupdate/createorupdate.component';
import { FindonestudentComponent } from './components/findonestudent/findonestudent.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CreateorupdateComponent,
    FindonestudentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
