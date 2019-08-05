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

  private playlist: any[] = [] ;
  constructor(private VideoPlayListService: VideoPlayListService,
    private featurestateService: FeaturestateService 
    ) { }

  ngOnInit() {
            
      //   console.log("got data "+this.playlist);
      
     // this.playlist = this.featurestateService.get("awesomeplayer").playlist ;
      console.log("got data "+this.playlist);
      this.playlist = this.featurestateService.get("awesomeplayer").playlist;
    }

}
