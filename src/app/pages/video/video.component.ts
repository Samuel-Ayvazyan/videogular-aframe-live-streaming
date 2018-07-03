import { Component, ViewChild } from '@angular/core';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';

@Component({
  selector: 'video-app',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  title = 'app';
  @ViewChild(VgHLS) vgHls: VgHLS;

}
