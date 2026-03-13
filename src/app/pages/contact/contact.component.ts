import { Component } from '@angular/core';
import { CONTACT_FORM_FIELDS } from '../../constants/contact-form.constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
}
