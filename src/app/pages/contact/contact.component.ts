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
  public readonly contactFormFields = CONTACT_FORM_FIELDS.map(field => ({
    ...field,
    value: '',
  }));
  public currentStep = 1;
  public currentStepFieldInputValue = '';

  public nextStep() {
    this.getCurrentStepField()!.value = this.currentStepFieldInputValue;
    this.currentStep++;
    this.currentStepFieldInputValue = this.getCurrentStepField()!.value;
  }

  public previousStep() {
    this.getCurrentStepField()!.value = this.currentStepFieldInputValue;
    this.currentStep--;
    this.currentStepFieldInputValue = this.getCurrentStepField()!.value;
  }

  public getCurrentStepField() {
    return this.contactFormFields.find(field => field.step === this.currentStep);
  }

  public getCurrentStepFieldId() {
    return this.getCurrentStepField()?.id;
  }

  public getCurrentStepFieldName() {
    return this.getCurrentStepField()?.name;
  }

  public getCurrentStepFieldPlaceholder() {
    return this.getCurrentStepField()?.placeholder;
  }

  public isNextStepDisabled() {
    return this.currentStepFieldInputValue.length < 3 || this.currentStepFieldInputValue.length > 200;
  }
}
