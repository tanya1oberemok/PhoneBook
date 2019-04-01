import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ListContactsComponent,
    UpdateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
