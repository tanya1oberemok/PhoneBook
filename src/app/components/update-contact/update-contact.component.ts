import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/contactModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contact: ContactModel;
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    let contactId = localStorage.getItem("contactId");
    if (!contactId) {
      alert ("Sometsing wrong!");
      this.router.navigate(['list']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      photo: ['']
    })

    this.contactService.getContactById(contactId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);
    })
  }

  get f() { return this.editForm.controls }

  onSubmit() {
    this.submitted = true;

    if( this.editForm.valid) {
      this.contactService.updateContact( this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list'])
      })
    }
  }

}
