import { Injectable } from '@angular/core';
import {
  LinkElement,
  MenuInsideOptions,
  MenuOptions,
  MenuSubOptions,
  MenuWidgetInterface,
} from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class SetmenuDTOService {
  constructor() {}

  public setMainDTO(item: any): MenuWidgetInterface {
    let menu: MenuWidgetInterface = {
      title: item.title,
      color: item.color,
      type: item.type,
      logo: item.logo,      
      options: this.setOptionsDTO(item.options),
    };
    return menu;
  }

  private setOptionsDTO(item: any): MenuOptions[] {
    console.log('options ', item);
    return item?.map((element: any) => {
      return {
        name: element.name,
        logo: element.logo,
        description: element.description,
        link: element.link,
        isOpen: false,
        data: this.setSubOptionsDTO(element.data),
      } as MenuOptions;
    });
  }

  private setSubOptionsDTO(item: any): MenuSubOptions[] {
    return item?.map((element: any) => {
      return {
        title: element.title,
        options: this.setInsideOptionsDTO(element.options),
      } as MenuSubOptions;
    });
  }
  private setInsideOptionsDTO(item: any): MenuInsideOptions[] {
    return item?.map((element: any) => {
      return {
        title: element.title,
        description: element.description,
        links: this.setLinksDTO(element.links),
      } as MenuInsideOptions;
    });
  }
  private setLinksDTO(item: any): LinkElement[] {
    return item?.map((element: any) => {
      return {
        name: element.name,
        link: element.link,
      } as LinkElement;
    });
  }
}
