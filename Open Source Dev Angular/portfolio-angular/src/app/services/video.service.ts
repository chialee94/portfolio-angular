import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VideoClip {
  id: number;
  title: string;
  fileName: string;
  poster: string;
  description: string;
  url?: string;
}

@Injectable({ providedIn: 'root' })
export class VideoService {
  // Replace this with your new App Service API URL
  private apiUrl = 'https://portfolioangular-ejcyfxdvbhakgjfs.centralus-01.azurewebsites.net/api/video';

  constructor(private http: HttpClient) {}

  getVideoClips(): Observable<VideoClip[]> {
    return this.http.get<VideoClip[]>(this.apiUrl);
  }
}