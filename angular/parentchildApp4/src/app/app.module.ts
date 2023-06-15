import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { ChildItemComponent } from './job-list/child-item/child-item.component';
import { ParentItemComponent } from './job-list/parent-item/parent-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    ChildItemComponent,
    ParentItemComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
