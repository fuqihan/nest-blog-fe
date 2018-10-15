import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';
import { createActionType } from '../utils';


export const GO = createActionType('[Router] Go');
export const BACK = createActionType('[Router] Back');
export const FORWARD = createActionType('[Router] Forward');

export class Go implements Action {
  readonly type = GO;

  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = BACK;
}

export class Forward implements Action {
  readonly type = FORWARD;
}

export type RouterActionsUnion = Go | Back | Forward;
