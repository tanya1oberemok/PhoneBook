import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactModel } from './contactModel';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //  httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  baseUrl: string = "http://localhost:4200/"

  getAllContacts() {
    return this.http.get<ContactModel[]>(this.baseUrl + 'contacts')
  }

  getContactById(id: string) {
    return this.http.get<ContactModel>(this.baseUrl + 'contacts' + '/' + id);
  }

  addContact(contact: ContactModel){
    return this.http.post(this.baseUrl + 'contacts', contact, );
  }

  deleteContact(id: string) {
    return this.http.delete(this.baseUrl + 'contacts' + '/' + id );
  }

  updateContact(contact: ContactModel) {
    return this.http.put(this.baseUrl + 'contacts' + '/' + contact.id, contact);
  }
}
