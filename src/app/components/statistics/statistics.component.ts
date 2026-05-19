import {
  afterNextRender,
  Component,
  ElementRef,
  OnDestroy,
  viewChildren,
} from '@angular/core';
import { CountUp, type CountUpOptions } from 'countup.js';

type StatItem = {
  readonly title: string;
  readonly description: string;
  readonly iconClass: string;
  readonly endVal: number;
  readonly countUpOptions?: CountUpOptions;
};

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent implements OnDestroy {
  readonly stats: StatItem[] = [
    {
      title: 'Clients supported',
      description:
        'to land their dream job in Australia',
      iconClass: 'fa-solid fa-users normal-icon',
      endVal: 200,
      countUpOptions: { suffix: '+' },
    },
    {
      title: 'Landed interviews',
      description:
        'after obtaining DreamShift services',
      iconClass: 'fa-solid fa-crosshairs normal-icon',
      endVal: 91,
      countUpOptions: { suffix: '%' },
    },
    {
      title: 'Client Reviews',
      description:
        'across Trustpilot, Google and WhatsApp',
      iconClass: 'fa-solid fa-star normal-icon',
      endVal: 100,
      countUpOptions: { suffix: '+' },
    },
  ];

  private readonly statTargets =
    viewChildren<ElementRef<HTMLElement>>('statTarget');

  private countUps: CountUp[] = [];

  constructor() {
    afterNextRender(() => {
      this.initCountUps();
    });
  }

  ngOnDestroy(): void {
    for (const cu of this.countUps) {
      cu.onDestroy();
    }
    this.countUps = [];
  }

  private initCountUps(): void {
    const targets = this.statTargets();
    const shared: CountUpOptions = {
      duration: 2.4,
      useGrouping: true,
      autoAnimate: true,
      autoAnimateOnce: true,
      autoAnimateDelay: 120,
    };

    targets.forEach((targetRef, index) => {
      const stat = this.stats[index];
      if (!stat) {
        return;
      }
      const options: CountUpOptions = {
        ...shared,
        ...stat.countUpOptions,
      };
      const cu = new CountUp(targetRef.nativeElement, stat.endVal, options);
      if (!cu.error) {
        this.countUps.push(cu);
      }
    });
  }
}
