import { Component, OnInit } from '@angular/core';
import { ElementRef , ViewChild, AfterViewInit} from '@angular/core';
import { PlayerComponent } from 'src/app/ui/player/player.component';
import { ControlsComponent } from 'src/app/ui/controls/controls.component';
import { FeatureStateService, FeaturestateService } from  'src/app/service/featurestate.service';

@Component({
  selector: 'app-awesome-player',
  templateUrl: './awesome-player.component.html',
  styleUrls: ['./awesome-player.component.scss']
})
export class AwesomePlayerComponent implements OnInit,AfterViewInit  {

  @ViewChild(PlayerComponent) playerRef: PlayerComponent;
  @ViewChild(ControlsComponent) controlsRef: ControlsComponent;
  private toggle = false;
  private featureState;
  private awesomePlayer;
  constructor(featureStateService:FeaturestateService) { 
   this.featureState = featureStateService;
   this.awesomePlayer = this.featureState.get("awesomeplayer") ;
   this.awesomePlayer.playlist = [];
   this.awesomePlayer.selectedPlaylist = {};
  }

  ngOnInit() {
    
    AwesomePlayer
  }
  ngAfterViewInit() {
    //console.log(this.controlsRef);
    this.controlsRef.playerRef(this.playerRef.getplayerInstance());
    //console.log(this.playerRef.getplayerInstance());
    //console.log('player instance \n '+this.controlsRef.player);
  }
  public togglePotraitMode() {
   this.toggle = !this.toggle  ;
  }
}
