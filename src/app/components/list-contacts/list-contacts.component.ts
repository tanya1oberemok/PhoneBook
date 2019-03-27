import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/contactModel';
import { ContactService } from 'src/app/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contacts: ContactModel[];

  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getAllContacts(): void {
    this.contactService.getAllContacts().subscribe(data => {
      this.contacts = data;
    })
  }

  addContact(): void {
    this.router.navigate([''])
  }
}
