import{ Http } from '@angular/http';
export abstract class MainApi {

    //protected http:Http;
    private mainUrl: string="http://localhost/";
    protected updateUrl: string ="/update";
    protected deleteUrl: string ="/delete";
    protected getUrl: string="/get";
    protected abstract go(url : string  , params: string[],http:Http) ;

    protected  makeUrl(section: string , extension: string  ):string
    {
      let url: string = this.mainUrl+"api/"+section+extension;

      return url;
    }
}
