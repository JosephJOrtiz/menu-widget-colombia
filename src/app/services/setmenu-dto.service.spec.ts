import { TestBed } from '@angular/core/testing';

import { SetmenuDTOService } from './setmenu-dto.service';

describe('SetmenuDTOService', () => {
  let service: SetmenuDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetmenuDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
