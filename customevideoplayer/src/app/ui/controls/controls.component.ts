import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FeaturestateService } from 'src/app/service/featurestate.service';
import { PlaylistComponent } from '../playlist/playlist.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit,AfterViewInit, AfterViewChecked   {
  public volume: number;
  public readonly stepper:number = 0.1;
  private  videoPlay = true;
  private  videoPause = false;
  private progress = 0;
  private awesomePlayer: any = {};
  private playlistComponet: PlaylistComponent
  @Input('playerelement') player: ElementRef;
  currentPlayItem: any;
  unlike: any;
  like: any;
 
  constructor(private featurestateService: FeaturestateService) {
    this.volume = 0.1;
    this.progress = 0;
   }
/**
    * 
    * @param playerRef player Instance thru refrence
    */
   public playerRef(playerRef: ElementRef) {
    this.player = playerRef;
    console.log('called' );
    this.player.nativeElement.volume = this.volume;
    this.player.nativeElement.onended =() =>{
      this.resetPlayNPauseStyles();
    };

    this.player.nativeElement.ontimeupdate = ()=>{
      var percentage = Math.floor((100 / this.player.nativeElement.duration) *
      this.player.nativeElement.currentTime);
      if(percentage) {  
            this.progress = (percentage |0); 
          }

      //console.log(percentage  + '%');
     // progressBar.value = percentage;
    };
  } 
/**
 * @param video current playing item
 */
  public setCurrentItem (video: any){
    this.currentPlayItem = video;
    this.setLike(video);
    this.setUnLike(video);
  }

  public setPlaylist(playlistComponet: PlaylistComponent){
    this.playlistComponet = playlistComponet;
  }
/**
 * @param video current playing item
 */
  private setLike(video: any) {
    this.like = video.likes;
  }

/**
 * @param video current playing item
 */
  private setUnLike(video: any) {
    this.unlike = video.unlike;
  }

  public resetPlayNPauseStyles(){
    this.videoPlay = true;
    this.videoPause = false;
    this.progress = 0;
   } 


  ngOnInit() {
    //this.player.nativeElement.on('ended',this.resetPlayNPauseStyles() );
   
  }
 /**
  * effects the css value by toggeling the booleane value
  */
  public tooglePlay(){
    this.videoPlay = !this.videoPlay;
  }

 /**
  * effects the css value by toggeling the booleane value
  */
  public tooglePause(){
    this.videoPause =  !this.videoPause;
  }
  ngAfterViewInit() {
    
   }
   

  ngAfterViewChecked(): void {
    const videoPlayer =document.getElementById('awesome_player');
    this.awesomePlayer = this.featurestateService.get("awesomeplayer");
   
  }
 
  /**
   * play toggles the css style and plays the video
   */
  public play() {
    this.player.nativeElement.play();
    this.tooglePlay();
    this.tooglePause();
   }
   public pause() {
    this.player.nativeElement.pause();
    this.tooglePlay();
    this.tooglePause();
   }

   public volumeUp() {
     console.log(this.player.nativeElement.volume);
     if (this.volume < 0.9) {
       this.volume = this.volume +  this.stepper;
       this.player.nativeElement.volume = this.volume;
       console.log(this.player.nativeElement.volume);
     }
   }
   public volumeDown() {
    console.log(this.player.nativeElement.volume);
    if (this.volume > 0) {
      this.volume = this.volume -  this.stepper;
      this.player.nativeElement.volume = this.volume;
      console.log(this.player.nativeElement.volume);
    }
   }
   public repeat() {
    this.player.nativeElement.load();
    this.player.nativeElement.play();
   }
   public changeLikes( ){
    this.like = this.like + 1;
    this.playlistComponet.updateLikes(this.currentPlayItem.id, this.like );
  }  
  public changeUnLikes( ){
    this.unlike = this.unlike + 1;
    this.playlistComponet.updateUnLikes(this.currentPlayItem.id, this.unlike );
  } 
}
