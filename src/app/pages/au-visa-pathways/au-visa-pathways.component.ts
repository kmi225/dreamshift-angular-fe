import { Component } from '@angular/core';
import { AU_VISAS } from '../../constants/au-visa-portal.constants';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-au-visa-pathways',
  imports: [AccordionComponent, CommonModule],
  templateUrl: './au-visa-pathways.component.html',
  styleUrl: './au-visa-pathways.component.scss'
})
export class AuVisaPathwaysComponent {
  public auVisas = AU_VISAS;

  public scrollToVisa(id: number) {
    console.log('scrollToVisa', id);
    const visaElement = document.getElementById(id.toString());
    if (visaElement) {
      visaElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
