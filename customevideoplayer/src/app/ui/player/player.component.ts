import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('playerelement') palyerRef:ElementRef;
  @Input() public videoSource:String;
  public player: any;
  constructor() { }

  ngOnInit() {
    this.videoSource = 'https://www.w3schools.com/tags/movie.mp4';
   
  }

  public getplayerInstance(){
  return this.palyerRef;
  }
  
}
