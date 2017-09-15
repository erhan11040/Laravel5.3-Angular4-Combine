import { Component, OnInit ,Input } from '@angular/core';
import { Http } from '@angular/http';
import { GalleryComponent } from '../gallery/gallery.component';
import {GalleryDataFetcherService} from '../services/gallery-data-fetcher.service';
import { Gallery } from '../ApiStruct/gallery';
@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {

  @Input()
    gallery: GalleryComponent;

  constructor(
    private http : Http,
    private GalleryService : GalleryDataFetcherService ,
    private galleryApi : Gallery ) { }

  ngOnInit() {
  }
  uploadFile(event)
  {

  	let elem = event.target;
  	console.log(elem);
  	if(elem.files.length > 0)
  	{
  		console.log(elem.files[0]);

      let sendingData : any ={erhan:elem.files[0]};
      //console.log( this.GalleryService.FetchData(formData));
      console.log(sendingData);
      this.galleryApi.update(sendingData,this.http).subscribe(
        (data) =>
        {
          console.log('Got some data from backend ',data);

        } ,
        (error) =>
        {
          console.log("error",error);

        })
      //let galleryJson = this.GalleryService.malfoy();


        //this.gallery.showGallery(galleryJson.path);
        //this.gallery.showGallery(galleryJson);


      }
  	}


}
