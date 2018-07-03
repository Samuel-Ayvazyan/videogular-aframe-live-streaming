import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { VideoAframeComponent } from './pages/video-aframe/video-aframe.component';
import { VideoComponent } from './pages/video/video.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        redirectTo: 'video-aframe',
        pathMatch: 'full'
    },
    {
        path: 'video-aframe',
        component: VideoAframeComponent
    },
    {
        path: 'video2',
        component: VideoAframeComponent
    },
    {
        path: 'video-no-aframe',
        component: VideoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }