import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'inicio', component: MainComponent, children: [
      { path: '', loadChildren: () => import('src/app/main/map/map.module').then(m => m.MapModule) },
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
