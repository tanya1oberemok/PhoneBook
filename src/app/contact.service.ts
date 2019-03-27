import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './contactModel';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:4200/"

  getAllContacts() {
    return this.http.get<ContactModel[]>(this.baseUrl + 'Contacts')
  }

  getContactById(id: string) {
    return this.http.get<ContactModel>(this.baseUrl + 'Contacts' + '/' +id);
  }

  addContact(contact: ContactModel){
    return this.http.post(this.baseUrl + 'Contact', contact);
  }
}
