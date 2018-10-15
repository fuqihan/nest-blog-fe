import { TestBed, inject } from '@angular/core/testing';

import { BrowserWindowRef } from './window.service';

describe('WindowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserWindowRef]
    });
  });

  it('should be created', inject([BrowserWindowRef], (service: BrowserWindowRef) => {
    expect(service).toBeTruthy();
  }));
});
