import { TestBed } from '@angular/core/testing';

import { CloudSaveService } from './cloud-save.service';

describe('CloudSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudSaveService = TestBed.get(CloudSaveService);
    expect(service).toBeTruthy();
  });
});
