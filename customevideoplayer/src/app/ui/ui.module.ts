import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AwesomePlayerComponent } from './awesome-player/awesome-player.component';
import { PlayerComponent } from './player/player.component';
import { ControlsComponent } from './controls/controls.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AddNewVideoComponent } from './add-new-video/add-new-video.component';
import { VideoPlayListService } from '../service/video-play-list.service';

@NgModule({
  declarations: [
      LayoutComponent,
      HeaderComponent,
      FooterComponent,
       AwesomePlayerComponent,
       PlayerComponent,
       ControlsComponent,
       PlaylistComponent,
       AddNewVideoComponent
       ],

  imports: [
    CommonModule
  ],
  providers: [
  VideoPlayListService
  ]
,  exports: [
    LayoutComponent,
    AwesomePlayerComponent,
    PlayerComponent,
    ControlsComponent,
    PlaylistComponent,
    AddNewVideoComponent
]
})
export class UiModule { }
