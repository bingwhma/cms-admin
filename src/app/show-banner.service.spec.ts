import { TestBed, inject } from '@angular/core/testing';

import { ShowBannerService } from './show-banner.service';

describe('ShowBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowBannerService]
    });
  });

  it('should ...', inject([ShowBannerService], (service: ShowBannerService) => {
    expect(service).toBeTruthy();
  }));
});
