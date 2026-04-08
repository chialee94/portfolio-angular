import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AudioClip {
  id: number;
  title: string;
  fileName: string;
  poster?: string;
  description: string;
  url?: string;
  transcript?: string;
}

@Injectable({ providedIn: 'root' })
export class AudioService {
  // Replace this with your new App Service API URL
  private apiUrl = 'https://portfolioangular-ejcyfxdvbhakgjfs.centralus-01.azurewebsites.net/api/audio';

  constructor(private http: HttpClient) {}

  getAudioClips(): Observable<AudioClip[]> {
    return this.http.get<AudioClip[]>(this.apiUrl);
  }
}