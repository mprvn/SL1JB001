import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit,AfterViewInit  {
  public volume: number;
  public readonly stepper:number = 0.1;
  constructor() {
    this.volume = 0.1;
   }

   @Input() player: ElementRef;
  ngOnInit() {

  }
  ngAfterViewInit() {
   }
  public playerRef(playerRef: ElementRef) {
    this.player = playerRef;
    console.log('called' );
    this.player.nativeElement.volume = this.volume;

  }
  public play() {
    this.player.nativeElement.play();
   }
   public pause() {
    this.player.nativeElement.pause();
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

}
