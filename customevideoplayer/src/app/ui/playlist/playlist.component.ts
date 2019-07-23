import { Component, OnInit } from '@angular/core';
import { VideoPlayListService } from 'src/app/service/video-play-list.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  providers:  [ VideoPlayListService ]
})
export class PlaylistComponent implements OnInit {

  private playlist: any[] = [] ;
  constructor(private VideoPlayListService: VideoPlayListService ) { }

  ngOnInit() {
        this.VideoPlayListService.getPlaylist().subscribe(( data: any[]) => {
        console.log(data);
        this.playlist = data;
      });
 }

}
