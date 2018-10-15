import { TestBed, inject } from '@angular/core/testing';

import { PwaUpdateService } from './pwa-update.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material';

describe('PwaUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PwaUpdateService],
      imports: [
        ServiceWorkerModule.register('', { enabled: false }),
        MatSnackBarModule
      ]
    });
  });

  it('should be created', inject([PwaUpdateService],
    (service: PwaUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
