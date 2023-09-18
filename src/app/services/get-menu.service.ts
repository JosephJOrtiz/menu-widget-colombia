import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  private urlBase = environment.apiUrl;
  private token = environment.token;

  constructor(private http: HttpClient) {}

  public fetchMenuData(locale:string = 'es') {
    let url = `${this.urlBase}/menus?populate[0]=logo&populate[1]=UrlSite&populate[2]=SubMenu.items.links&populate[3]=backgroundImage&populate[4]=SubMenu.backgroundImage&populate[5]=logoFooter&locale=${locale}`;
    const headers = {'Authorization': `Bearer ${this.token}`}
    return this.http.get<any>(url, {headers:headers});
    /* return this.http.get('assets/menu.json'); */
  }
}
