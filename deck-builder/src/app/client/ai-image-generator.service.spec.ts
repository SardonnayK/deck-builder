import { TestBed } from '@angular/core/testing';

import { AiImageGeneratorService } from './ai-image-generator.service';

describe('AiImageGeneratorService', () => {
  let service: AiImageGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiImageGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
