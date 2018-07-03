import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'video-app',
  templateUrl: './native-video.component.html',
  styleUrls: ['./native-video.component.css']
})
export class NativeVideoComponent implements OnInit{
  hlsBitrates = [];
  src = "";
  ngOnInit() {
    // const url = 'http://yourdomain.com/yourvideo.mp4';
    // const mediaSource = new MediaSource();
    // var video = document.querySelector('video');
    // video.src = window.URL.createObjectURL(mediaSource);

    // mediaSource.addEventListener('sourceopen', function(e) {
    //   var sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vorbis,vp8"');
    //   sourceBuffer.appendBuffer(oneVideoWebMChunk);
    // }, false);

    // this.src =  window.URL.createObjectURL("https://player.vimeo.com/external/277472429.hd.mp4?s=be6892ff1ac2e12fea2752f7ee5ab71c17ffceeb&profile_id=175")
    // console.log(this.src);

  }
}
