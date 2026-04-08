import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService, VideoClip } from '../services/video.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrls: []
})
export class VideoComponent implements OnInit {
  videoClips: VideoClip[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideoClips().subscribe(clips => {
      this.videoClips = clips;
    });
  }
}