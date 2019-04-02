import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactService
    ) { }

    addForm: FormGroup;
    submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      photo: ['']
    })
  }

  onSubmit() {
    this.submitted = true;

    if(this.addForm){
      this.contactService.addContact(this.addForm.value)
      .subscribe( data =>
        this.router.navigate(['list']));
    }
  }

  get f() { return this.addForm.controls;}
}
