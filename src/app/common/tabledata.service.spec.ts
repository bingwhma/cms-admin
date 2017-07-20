import { TestBed, inject } from '@angular/core/testing';

import { TabledataService } from './tabledata.service';

describe('TabledataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabledataService]
    });
  });

  it('should ...', inject([TabledataService], (service: TabledataService) => {
    expect(service).toBeTruthy();
  }));
});
