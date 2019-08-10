import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { ControlsComponent } from '../controls/controls.component';

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
  
  ngOnInit() {
    //this.videoSource = 'https://www.w3schools.com/tags/movie.mp4';
    //this.videoSource =""
  }

  public getplayerInstance() {
    return this.palyerRef;
  }
/**
 * sets playying vedio sources
 */
  public setVideoSource (videoObject: any){
    this.videoSource = videoObject.url;
    const playerInstace : HTMLVideoElement  = this.palyerRef.nativeElement;
    playerInstace.load(); 
   // playerInstace.play()
    console.log("called");
  }
} ``
