import { TestBed, inject } from '@angular/core/testing';

import { PhotoservicesService } from './photoservices.service';

describe('PhotoservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoservicesService]
    });
  });

  it('should be created', inject([PhotoservicesService], (service: PhotoservicesService) => {
    expect(service).toBeTruthy();
  }));
});
