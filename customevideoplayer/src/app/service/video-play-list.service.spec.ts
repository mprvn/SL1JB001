import { TestBed } from '@angular/core/testing';

import { VideoPlayListService } from './video-play-list.service';

describe('VideoPlayListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoPlayListService = TestBed.get(VideoPlayListService);
    expect(service).toBeTruthy();
  });
});
