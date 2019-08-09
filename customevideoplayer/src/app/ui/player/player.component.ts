import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('playerelement') palyerRef: ElementRef;
  @Input() public videoSource: string;
  @Output() progressVideo = new EventEmitter();
  videoProgress: number ;
  public player: any;
  constructor() { }
  public progressOfVideo(progress){
    console.log("progress " +progress);
  }
  ngOnInit() {
    this.videoSource = 'https://www.w3schools.com/tags/movie.mp4';
  }

  public getplayerInstance() {
    return this.palyerRef;
  }

}
