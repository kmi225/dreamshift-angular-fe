import { Component, Input } from '@angular/core';
import { NgbAccordionBody, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem, NgbAccordionToggle } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AccordionItem } from '../../models/accordion-item.model';
import { AnimateOnVisibleDirective } from '../../directives/animate-on-visible.directive';

@Component({
  selector: 'app-accordion',
  imports: [
    CommonModule,
    NgbAccordionButton,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionBody,
    NgbAccordionCollapse,
    AnimateOnVisibleDirective
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() public title?: string;
  @Input() public accordionItems: AccordionItem[] = [];
}
