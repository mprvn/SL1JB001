import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef   } from '@angular/core';
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
    private featurestateService: FeaturestateService ,
    private changeDetection: ChangeDetectorRef
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
      this.featurestateService.get('awesomeplayer').selectedPlay =
       this.awesomePlayer.playlist.filter( (video) =>{
       return video.id == id;
      });
      this.playerCompRef.setVideoSource(this.featurestateService.get('awesomeplayer').selectedPlay[0]);
      this.controlsRef.setCurrentItem(this.featurestateService.get('awesomeplayer').selectedPlay[0]);
      this.controlsRef.resetPlayNPauseStyles();
    }

    /**
     * 
     * @param id Current play item id 
     * @param likes number of likes 
     */
    public updateLikes(id:number , likes: number){
      let copyOfVideo = {...this.getCurrentVideo (id)};
      copyOfVideo.likes = likes;
     this.awesomePlayer.playlist[id-1] = copyOfVideo;
    //  this.changeDetection.detectChanges();
    }
  public getCurrentVideo (id:number){
    const currentVideo =  this.awesomePlayer.playlist.filter( (video) =>{
      return video.id == id;
     });
    
     return currentVideo[0];
  }

/**
 * 
 * @param id  Current play item id 
 * @param unlike number of unlikes
 */
  public updateUnLikes(id:number , unlike: number){
    console.log("unlike " +unlike + "id "+id );
    let copyOfVideo = {...this.getCurrentVideo (id)};
    copyOfVideo.unlike = unlike;
    this.awesomePlayer.playlist[id-1] = copyOfVideo;
    
  }

  trackElement(index: number, element: any) {
    return element ? element.id : null
  }
}
