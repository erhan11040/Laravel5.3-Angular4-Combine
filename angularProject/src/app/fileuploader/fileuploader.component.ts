import { Component, OnInit ,Input } from '@angular/core';
import { Http } from '@angular/http';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {

  @Input()
    gallery: GalleryComponent;

  constructor(private http : Http) { }

  ngOnInit() {
  }
  uploadFile(event)
  {
  	let elem = event.target;
  	console.log(elem);
  	if(elem.files.length > 0)
  	{
  		console.log(elem.files[0]);
  		let formData = new FormData();
  		formData.append("file",elem.files[0]);

      this.http.post('http://localhost/angular4Laravel/blog/public/api',formData).subscribe(
        (data) =>
        {
          let galleryJson = data.json() ;
          this.gallery.showGallery();
          console.log('Got some data from backend ',data);
        } ,
        (error) =>
        { console.log("error",error); })
      }
  	}


}
