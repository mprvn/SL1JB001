import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwesomePlayerComponent } from './ui/awesome-player/awesome-player.component';
import { AddNewVideoComponent } from './ui/add-new-video/add-new-video.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/player',
         pathMatch: 'full'
    },
    {
    path: 'addvideo',
    component: AddNewVideoComponent,
    pathMatch: 'full'
    },
    {
    path: 'player',
    component: AwesomePlayerComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
