import { Component, OnInit } from '@angular/core';
import { ElementRef , ViewChild, AfterViewInit} from '@angular/core';
import { PlayerComponent } from 'src/app/ui/player/player.component';
import { ControlsComponent } from 'src/app/ui/controls/controls.component';

@Component({
  selector: 'app-awesome-player',
  templateUrl: './awesome-player.component.html',
  styleUrls: ['./awesome-player.component.scss']
})
export class AwesomePlayerComponent implements OnInit,AfterViewInit  {

  @ViewChild(PlayerComponent) playerRef: PlayerComponent;
  @ViewChild(ControlsComponent) controlsRef: ControlsComponent;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.controlsRef);
    this.controlsRef.playerRef(this.playerRef.getplayerInstance());
    console.log(this.playerRef.getplayerInstance());
    console.log('player instance \n '+this.controlsRef.player);
  }
}
