/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TreinosPresetService } from './treinos-preset.service';

describe('Service: TreinosPreset', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreinosPresetService]
    });
  });

  it('should ...', inject([TreinosPresetService], (service: TreinosPresetService) => {
    expect(service).toBeTruthy();
  }));
});
