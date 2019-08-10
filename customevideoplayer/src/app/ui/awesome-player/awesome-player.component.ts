import { Component, OnInit } from '@angular/core';
import { ElementRef , ViewChild, AfterViewInit} from '@angular/core';
import { PlayerComponent } from 'src/app/ui/player/player.component';
import { ControlsComponent } from 'src/app/ui/controls/controls.component';
import { FeaturestateService } from  'src/app/service/featurestate.service';
import { VideoPlayListService } from 'src/app/service/video-play-list.service' ;
import { PlaylistComponent } from '../playlist/playlist.component';

@Component({
  selector: 'app-awesome-player',
  templateUrl: './awesome-player.component.html',
  styleUrls: ['./awesome-player.component.scss'],
  providers:  [ VideoPlayListService , FeaturestateService]
})
export class AwesomePlayerComponent implements OnInit,AfterViewInit  {

  @ViewChild(PlayerComponent) playerRef: PlayerComponent;
  @ViewChild(ControlsComponent) controlsRef: ControlsComponent;
  @ViewChild(PlaylistComponent) playlistRef: PlaylistComponent;
  private toggle = false;
  private awesomePlayer;
  
  constructor(private featureStateService: FeaturestateService,
    private videoPlayListService: VideoPlayListService) { 
     }

  ngOnInit() {
   //this.featureStateService.get("awesomeplayer").playlist = this.videoPlayListService.getPlaylist();
   //this.featureStateService.get("awesomeplayer").selectedPlaylist = {};

  }
  ngAfterViewInit() {
    //console.log(this.controlsRef);
    this.controlsRef.playerRef(this.playerRef.getplayerInstance());
    this.playlistRef.setControlCompRef(this.controlsRef);
    this.playlistRef.setPLayerCompRef(this.playerRef);
    this.controlsRef.setPlaylist(this.playlistRef);
    //console.log(this.playerRef.getplayerInstance());
    //console.log('player instance \n '+this.controlsRef.player);
  }
  public togglePotraitMode() {
   this.toggle = !this.toggle  ;
  }
}
