import { Component, OnInit } from '@angular/core';
import { VideoPlayListService } from 'src/app/service/video-play-list.service';
import { Router } from '@angular/router';
import { FeaturestateService } from 'src/app/service/featurestate.service';
@Component({
    selector: 'app-add-new-video',
    templateUrl: './add-new-video.component.html',
    styleUrls: ['./add-new-video.component.scss'],
    providers: [VideoPlayListService]
})

export class AddNewVideoComponent implements OnInit {
    constructor(private VideoPlayListService: VideoPlayListService,
                private _router: Router,
                private featureState : FeaturestateService ) { }
    private isEditEnabled = false;
    private playlist: any[] = [];
    title = '';
    url = '';
    currentItem;
  
    ngOnInit() {
        this.getPlaylist();
    }
    public getPlaylist() {
        if(this.featureState.get("awesomeplayer").playlist){
            this.playlist = this.featureState.get("awesomeplayer").playlist;
        } else{  
            this.VideoPlayListService.getPlaylist().subscribe((data: any[]) => {
            //console.log(data);
            this.resetFields();
            this.playlist = data;
            this.updatePlaylistCache();
        });
      }

    }
    public add() {
        const postData = this.getPostData('added', this.playlist.length);
        this.VideoPlayListService.createVideo(postData).subscribe((data: any) => {
         });
         this.playlist.push(postData);
         this.updatePlaylistCache();
         this.toggleEdit();
         this.resetFields();
    }

    public enableEdit(id: number){
        this.title = this.playlist[id].title;
        this.url = this.playlist[id].url;
        this.currentItem = this.playlist[id].id;
        this.toggleEdit();
    }
   public updatePlaylistCache(){
    this.featureState.get("awesomeplayer").playlist = this.playlist;
   }
    public toggleEdit(){
        this.isEditEnabled = !this.isEditEnabled;
    }
   
   public approve(id: number){
    this.url = this.playlist[id].url;
    this.playlist[id].approved = 1;
    this.updatePlaylistCache();
    this.resetFields();
   }

   public resetFields(){
       this.title = '';
       this.url = '';
       this.currentItem = '';
   }
 
   public edit(){
    const postData = this.getPostData('edited', this.currentItem );
    this.VideoPlayListService.updateVideo(postData).subscribe((data: any) => {
        
     });
     this.playlist.push(postData);
     this.updatePlaylistCache();
     this.toggleEdit();
     this.resetFields();
  }
   
    public deleteVideo(id: number) {
        this.VideoPlayListService.deleteVideo(id).subscribe((data: any) => {
           
        });
        if (id > -1) {
            this.playlist.splice(id, 1);
            this.updatePlaylistCache();
          }

    }
     getPostData(Status : string, id : number) {
         let video = {
            id: id,
            title: this.title,
            url: this.url,
            status: Status,
            approved: 0,
            likes: 0,
            unlike: 0,
            currentStatus: '',
            exitplayprogress: 0

        };
        return video;
  }
}
