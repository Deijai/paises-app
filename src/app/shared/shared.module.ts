import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent, MenuComponent]
})
export class SharedModule { }
