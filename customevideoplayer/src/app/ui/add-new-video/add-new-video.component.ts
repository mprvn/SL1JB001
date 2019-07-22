import { Component, OnInit } from '@angular/core';
import { VideoPlayListService } from 'src/app/service/video-play-list.service';

@Component({
  selector: 'app-add-new-video',
  templateUrl: './add-new-video.component.html',
  styleUrls: ['./add-new-video.component.scss'],
   providers:  [ VideoPlayListService ]
})

export class AddNewVideoComponent implements OnInit {

  private playlist: any[] = [] ;
  constructor(private VideoPlayListService: VideoPlayListService ) { }

  ngOnInit() {
        this.VideoPlayListService.getPlaylist().subscribe(( data: any[]) => {
        console.log(data);
        this.playlist = data;
      });
 }

}
