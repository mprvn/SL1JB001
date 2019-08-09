import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';

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
  @Input('playerelement') player: ElementRef;
 
  constructor() {
    this.volume = 0.1;
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
      if(percentage) {      this.progress = (percentage |0); }

      console.log(percentage  + '%');
     // progressBar.value = percentage;
    };
  } 

  public setProgress (playerRef: ElementRef){

  }
   public resetPlayNPauseStyles(){
    this.videoPlay = true;
    this.videoPause = false;
   } 


  ngOnInit() {
    //this.player.nativeElement.on('ended',this.resetPlayNPauseStyles() );
    const videoPlayer =document.getElementById('awesome_player');
    
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
    // this.playerElement.nativeElement.onended(this.resetPlayNPauseStyles());
   }
   

  ngAfterViewChecked(): void {
   //this.playerElement.nativeElement.on('ended',this.resetPlayNPauseStyles());
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
   public like(likes:number, id : number ){
    
   } 
}
