import { TestBed } from '@angular/core/testing';

import { GuardScoreGuard } from './guard-score.guard';

describe('GuardScoreGuard', () => {
  let guard: GuardScoreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardScoreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
