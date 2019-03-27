import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';

const routes: Routes = [
  {
    path: '', component: AddContactComponent
  },
  {
    path: 'list', component: ListContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
