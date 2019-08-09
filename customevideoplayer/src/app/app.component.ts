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
      this.featureStateService.get("awesomeplayer").dataLoader = true;
      
  
  }
  
  ngOnInit() {
          // this.featureStateService.get("awesomeplayer").selectedPlaylist = {};
         }
}
