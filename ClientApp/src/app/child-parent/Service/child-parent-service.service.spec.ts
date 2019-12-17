import { TestBed, inject } from '@angular/core/testing';

import { ChildParentServiceService } from './child-parent-service.service';

describe('ChildParentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildParentServiceService]
    });
  });

  it('should be created', inject([ChildParentServiceService], (service: ChildParentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
