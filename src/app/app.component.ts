import { Component } from '@angular/core';
import { Observable } from 'rxjs/index';
import { LayoutService } from './core/services/layout/layout.service';

@Component({
  selector: 'app-root',
  template: `
    <ng-progress [color]="'#4286f4'" [spinner]="false"></ng-progress>
    <ng-template appComponentResolver [component]="layout$ | async"></ng-template>
  `,
})
export class AppComponent {
  layout$: Observable<any>;
  constructor(private layoutService: LayoutService) {
    this.layout$ = layoutService.layout$;
  }

}
