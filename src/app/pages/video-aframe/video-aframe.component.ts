import { Component, ViewChild } from '@angular/core';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';

@Component({
  selector: 'video-aframe-app',
  templateUrl: './video-aframe.component.html',
  styleUrls: ['./video-aframe.component.css']
})
export class VideoAframeComponent {
  hlsBitrates = [];
  @ViewChild(VgHLS) vgHls: VgHLS;

}
