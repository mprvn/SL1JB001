import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';    
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './service/data.service';

import { VideoPlayListService } from './service/video-play-list.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],
  providers: [
      VideoPlayListService,
      HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
