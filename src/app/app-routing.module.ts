import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';

const routes: Routes = [
  {
    path: '', component: AddContactComponent, pathMatch: 'full'
  },
  {
    path: 'list', component: ListContactsComponent
  },
  {
    path: 'update-contact', component: UpdateContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
