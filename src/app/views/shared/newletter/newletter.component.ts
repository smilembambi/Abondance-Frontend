import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../../core/services/contact.service";
import {ContactModel} from "../../../models/contact.model";
import {MESSAGE_CHAMPS_OBLIGATOIRE} from "../../../core/helpers/constantes/message";

@Component({
  selector: 'app-newletter',
  templateUrl: './newletter.component.html',
  styleUrls: ['./newletter.component.scss']
})
export class NewletterComponent implements OnInit {
  contactForm: FormGroup;
  msgErrors: string = "";

  constructor(private fb: FormBuilder,
              private contactService: ContactService) { }

  ngOnInit() {

    //Creation de formulaire de contact
    this.createForm();
  }


  /**
   * Création du formulaire de contact
   */
  createForm() {
    this.contactForm = this.fb.group({
      nom: ["", Validators.required],
      prenom: [""],
      email: ["", Validators.required],
    });
  }


  /**
   * Preparer le contact
   */
  prepareContact(): ContactModel{

    let _contact = new ContactModel();
    let controls = this.contactForm.controls;
    _contact.email = controls['email'].value;
    _contact.prenom = controls['prenom'].value;
    _contact.nom = controls['nom'].value;

    return _contact;
  }


  /**
   * Creation de contact
   */
  creer() {

    console.log("smile")
    this.msgErrors = '';
    const controls = this.contactForm.controls;
    /** check form */
    if (this.contactForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );

      this.msgErrors = MESSAGE_CHAMPS_OBLIGATOIRE;
      return;
    }

    let _contact: ContactModel = this.prepareContact();
    this.contactService.create(_contact).subscribe(
      (data: ContactModel )=>{
        if(data){
          
        }
      }
    );


  }
}
