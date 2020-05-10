import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QLibhomeComponent } from './qlibhome/qlibhome.component';
import { NewQueryComponent } from './newquery/newquery.component';
import { NewSectionComponent } from './newsection/newsection.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './App.routing';
import { routing } from './App.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrModule } from 'ngx-toastr';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    AppComponent,
    QLibhomeComponent,
    NewQueryComponent,
    NewSectionComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    ToastrModule.forRoot({
      timeOut : 1000,
      progressBar:true,
      progressAnimation : 'increasing'
    }),
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
