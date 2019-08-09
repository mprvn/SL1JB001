import { Component, OnInit } from '@angular/core';
import { VideoPlayListService } from 'src/app/service/video-play-list.service';
import { FeaturestateService } from 'src/app/service/featurestate.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  providers:  [ VideoPlayListService, FeaturestateService ]
})
export class PlaylistComponent implements OnInit {

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
    });
     console.log("got data "+this.playlist);
     
    }

    public selectToPlay(id: number){
      this.featurestateService.get('awesomeplayer').selectedPlay = this.awesomePlayer.playlist.filter( (video) =>{
       return video.id == id;
      });
      console.log('this.featurestateService.get(awesomeplayer).selectedPlay' + this.featurestateService.get('awesomeplayer').selectedPlay);
    }
}
