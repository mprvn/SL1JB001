import { Component, OnInit } from '@angular/core';
import { VideoPlayListService } from 'src/app/service/video-play-list.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-add-new-video',
    templateUrl: './add-new-video.component.html',
    styleUrls: ['./add-new-video.component.scss'],
    providers: [VideoPlayListService]
})

export class AddNewVideoComponent implements OnInit {
    constructor(private VideoPlayListService: VideoPlayListService,
                private _router: Router ) { }

    private playlist: any[] = [];
    title = '';
    url = '';
  public any 
    ngOnInit() {
        this.getPlaylist();
    }
    public getPlaylist() {
        this.VideoPlayListService.getPlaylist().subscribe((data: any[]) => {
            console.log(data);
            this.playlist = data;
        });
    }
    public addVideo() {
        this.VideoPlayListService.createVideo(this.getPostData()).subscribe((data: any) => {
            console.log(data);
            this.getPlaylist();
            this.playlist = [].concat(this.playlist);
           // this._router.navigate(['/addvideo']);
        });
    }

    public deleteVideo(id: number) {
        this.VideoPlayListService.deleteVideo(id).subscribe((data: any) => {
            console.log(data);
            this.getPlaylist();
            this.playlist = [].concat(this.playlist);
           // this._router.navigate(['/addvideo']);
        });
    }
     getPostData() {
         let video = {
            id: this.playlist.length + 1,
            title: this.title,
            url: this.url,
            status: 'added',
            approved: 0,
            likes: 0,
            unlike: 0,
            currentStatus: '',
            exitplayprogress: 0

        };
        return video;
  }
}
