import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,  // make these standalone as well
    AudioComponent,
    VideoComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {}