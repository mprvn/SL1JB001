import { Component } from '@angular/core';
import { FeaturestateService } from  'src/app/service/featurestate.service';
import { VideoPlayListService } from 'src/app/service/video-play-list.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [ VideoPlayListService , FeaturestateService]
})
export class AppComponent {
  title = 'customevideoplayer';
  constructor(private featureStateService: FeaturestateService,
    private videoPlayListService: VideoPlayListService) { 
  }
  
  ngOnInit() {
          // this.featureStateService.get("awesomeplayer").selectedPlaylist = {};
     this.videoPlayListService.getPlaylist().subscribe(( data: any[]) => {
      console.log(data);
      this.featureStateService.get("awesomeplayer").playlist = data;
      console.log( this.featureStateService.get("awesomeplayer").playlist);
   });
     }
}
