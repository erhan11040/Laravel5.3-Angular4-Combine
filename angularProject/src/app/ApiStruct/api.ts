import{ Http } from '@angular/http';
export  interface Api {

  sectionUrl:string;
  //go(url:string):string;
  update(params:string[],http:Http);
  delete(params:string[],http:Http);
  get(params:string[],http:Http);

}
