import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Gallery } from '../ApiStruct/gallery';
import { Api } from '../ApiStruct/api';
import {MainApi} from '../ApiStruct/main-api';
@Injectable()
export class GalleryDataFetcherService {

  constructor(private http : Http, private gal : Gallery) { }
   FetchData(formData): any
  {
    let FetchedData: any;
    //this.gal.update(null)

    this.http.post('http://localhost/angular4Laravel/blog/public/api',formData).subscribe(
      (data) =>
      {
        console.log('Got some data from backend ',data);
        FetchedData= data;
      } ,
      (error) =>
      {
        console.log("error",error);
        FetchedData= null;
      })
      return FetchedData;
  }


}
