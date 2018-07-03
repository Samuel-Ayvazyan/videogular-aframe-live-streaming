import { Component, ViewChild } from '@angular/core';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild(VgHLS) vgHls: VgHLS;

}
