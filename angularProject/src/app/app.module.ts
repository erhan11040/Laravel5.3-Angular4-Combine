import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Api } from './ApiStruct/api';
import { MainApi } from './ApiStruct/main-api';
import { Gallery } from './ApiStruct/gallery';
import { HttpModule } from '@angular/http';
import {GalleryDataFetcherService} from './services/gallery-data-fetcher.service';

@NgModule({
  declarations: [
    AppComponent,
    FileuploaderComponent,
    HeaderComponent,
    GalleryComponent

  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [GalleryDataFetcherService
  ,  Gallery],
  bootstrap: [AppComponent]
})
export class AppModule { }
