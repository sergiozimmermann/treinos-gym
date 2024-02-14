/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TreinosDiariosService } from './treinos-diarios.service';

describe('Service: TreinosDiarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreinosDiariosService]
    });
  });

  it('should ...', inject([TreinosDiariosService], (service: TreinosDiariosService) => {
    expect(service).toBeTruthy();
  }));
});
