import { Api } from './api';
import { MainApi } from './main-api';
import { Http } from '@angular/http';
export class Gallery extends MainApi implements Api  {




   sectionUrl:string="Gallery";
  protected go(url:string , params: string[],http:Http)
  {


    let formData = new FormData();

    for(let i of params )
    {
      console.log(i);


      formData.append(i,params[i]);

    }
    console.log(url);
    console.log(formData);
    return http.post(url,formData);
  }
  update(params:string[],http:Http)
  {

    return this.go(this.makeUrl(this.sectionUrl,this.updateUrl), params,http);

  }
  delete(params:string[],http:Http)
  {
    return this.go(this.makeUrl(this.sectionUrl,this.deleteUrl), params,http);
  }
  get(params:string[],http:Http)
  {
    return this.go(this.makeUrl(this.sectionUrl,this.getUrl), params,http);
  }
}
