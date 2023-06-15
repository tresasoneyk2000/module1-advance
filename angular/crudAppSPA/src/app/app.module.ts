import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    RetrieveComponent,
    DeleteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // FormGroup, FormBuilder, Validators, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
