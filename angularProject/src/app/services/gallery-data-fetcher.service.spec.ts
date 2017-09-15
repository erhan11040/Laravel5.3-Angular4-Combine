import { TestBed, inject } from '@angular/core/testing';

import { GalleryDataFetcherService } from './gallery-data-fetcher.service';

describe('GalleryDataFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryDataFetcherService]
    });
  });

  it('should be created', inject([GalleryDataFetcherService], (service: GalleryDataFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
