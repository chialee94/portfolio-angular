import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ added
import { AudioService, AudioClip } from '../services/audio.service';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio.html', // match your actual file name
  styleUrls: []
})
export class AudioComponent implements OnInit {
  audioClips: AudioClip[] = [];

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.getAudioClips().subscribe(clips => {
      this.audioClips = clips;
    });
  }
}