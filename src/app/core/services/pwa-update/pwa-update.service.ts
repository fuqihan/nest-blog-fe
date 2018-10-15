import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class PwaUpdateService {

  constructor(private swUpdate: SwUpdate,
              private snackbar: MatSnackBar) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(evt => {
        const snack = this.snackbar.open('Update Available', 'Reload');

        snack
          .onAction()
          .subscribe(() => {
            window.location.reload();
          });
        setTimeout(() => {
          snack.dismiss();
        }, 12000);
      });
    }
  }
}
