import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  amIVisible: boolean = false;
  pictureId: string ="blank";
  constructor() { }

  ngOnInit() {
  }
  showGallery(pictureId: string)
  {

  	this.amIVisible = true;
    this.pictureId=pictureId;
  }

}
