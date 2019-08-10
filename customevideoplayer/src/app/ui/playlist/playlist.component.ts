import { Component, OnInit, ViewChild, AfterViewInit,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VideoPlayListService } from 'src/app/service/video-play-list.service';
import { FeaturestateService } from 'src/app/service/featurestate.service';
import { PlayerComponent } from '../player/player.component';
import { ControlsComponent } from '../controls/controls.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  providers:  [ VideoPlayListService, FeaturestateService ]
})
export class PlaylistComponent implements OnInit , AfterViewInit{
  private playerCompRef: PlayerComponent;
  private controlsRef: ControlsComponent;

  private playlist: any[] ;
  private awesomePlayer: any = {};
  constructor(private VideoPlayListService: VideoPlayListService,
    private featurestateService: FeaturestateService 
    ) {    }

  ngOnInit() {            
    this.VideoPlayListService.getPlaylist().subscribe(( data: any[]) => {
      this.featurestateService.get("awesomeplayer").playlist = data;
      this.awesomePlayer.playlist = this.featurestateService.get("awesomeplayer").playlist;
      console.log( this.featurestateService.get("awesomeplayer").playlist);
      this.featurestateService.get("awesomeplayer").selectedPlay = this.awesomePlayer.playlist[0];
      this.playerCompRef.setVideoSource( this.featurestateService.get("awesomeplayer").selectedPlay);
      this.controlsRef.setCurrentItem( this.featurestateService.get("awesomeplayer").selectedPlay);
    }); 
         
    }

    ngAfterViewInit(): void {
       
    }
   /**
    * @param payerComponent player component reference
    */
    public setPLayerCompRef(payerComponent: PlayerComponent){
        this.playerCompRef = payerComponent;
    }
    /**
    * @param payerComponent Contyrol component reference
    */
    public setControlCompRef(controlsRef: ControlsComponent){
      this.controlsRef = controlsRef;
    }
    public selectToPlay(id: number){
      this.featurestateService.get('awesomeplayer').selectedPlay = this.awesomePlayer.playlist.filter( (video) =>{
       return video.id == id;
      });
      console.log('this.featurestateService.get(awesomeplayer).selectedPlay' + this.featurestateService.get('awesomeplayer').selectedPlay);
    }

    /**
     * 
     * @param id Current play item id 
     * @param likes number of likes 
     */
    public updateLikes(id:number , likes: number){
        this.awesomePlayer.playlist[id].likes = likes;
    }
/**
 * 
 * @param id  Current play item id 
 * @param unlike number of unlikes
 */
  public updateUnLikes(id:number , unlike: number){
    console.log("unlike " +unlike + "id "+id );
      this.awesomePlayer.playlist[id].unlike = unlike;
  }
}
