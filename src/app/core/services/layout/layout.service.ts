import { BehaviorSubject, Observable } from 'rxjs/index';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';

export class LayoutService {

  private subject = new BehaviorSubject<any>(MainLayoutComponent);

  layout$: Observable<any> = this.subject.asObservable();

  changeLayout(component: any): void {
    this.subject.next(component);
  }

  resetLayout(): void {
    this.subject.next(MainLayoutComponent);
  }
}
