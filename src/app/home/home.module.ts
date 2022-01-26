import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { AddBlogEntryComponent } from './add-blog-entry/add-blog-entry.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    BlogEntryComponent,
    AddBlogEntryComponent
  ]
})
export class HomePageModule {}
