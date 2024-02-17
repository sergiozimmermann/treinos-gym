/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfirmDiscardChangesService } from './confirm-discard-changes.service';

describe('Service: ConfirmDiscardChanges', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmDiscardChangesService]
    });
  });

  it('should ...', inject([ConfirmDiscardChangesService], (service: ConfirmDiscardChangesService) => {
    expect(service).toBeTruthy();
  }));
});
