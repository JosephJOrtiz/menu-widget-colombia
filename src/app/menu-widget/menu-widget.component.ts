import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../services/get-menu.service';
import { SetmenuDTOService } from '../services/setmenu-dto.service';
import { environment } from 'src/environments/environment';


import {
  MenuInsideOptions,
  MenuOptions,
  MenuSubOptions,
  MenuWidgetInterface,
} from '../interfaces/menu.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu-widget',
  templateUrl: './menu-widget.component.html',
  styleUrls: ['./menu-widget.component.scss'],
})
export class MenuWidgetComponent implements OnInit {
  public data:any  = false;
  mainOptions!: MenuOptions;
  subOptions: MenuSubOptions[] = [];
  insideOptions: MenuInsideOptions[] = [];
  colorselect:string  = '#202020';
  noScrollMenu: boolean = false;

  openItemParent:null|number = null;
  openItemSubParent:null|number = null;
  urlSite = environment.url;
  constructor(
    private menuService: MenuService,
    private setDTO: SetmenuDTOService,
  ) {}

  ngOnInit(): void {
    const language = this.getUrlVars();
    this.menuService.fetchMenuData(language).subscribe((response: any) => {
      if(response.data.length) {
        this.data = response.data;
      }
      else {
        this.data = false;
        const bodyTag = document.body;
        bodyTag.style.height = '0px';
      }
      
    },
    error => {
      this.data = false;
      const bodyTag = document.body;
      bodyTag.style.height = '0px';
    });
    
  }

  toggleMenu(index: number) {
    this.openItemSubParent = null;
    this.noScrollMenu = false;
    if(this.openItemParent === index) {
      this.openItemParent = null;
      this.colorselect  = '#202020';
    }
    else {
      this.colorselect = this.data[index].attributes.backgroundColor;
      this.openItemParent = index;
    } 
  }

  toogleSubMenu(index: number):void {
    if(this.openItemSubParent === index) {
      this.openItemSubParent = null;
    }
    else {
      this.openItemSubParent = index;
    }
  }
  toggleOpen() {
    this.openItemSubParent = null;
  }
  
  toggleClose() {
    this.openItemSubParent = null;
    this.noScrollMenu = false;
  } 

  closeAll(){
    this.openItemParent = null;
    this.openItemSubParent = null;
  }

  toggleDarkMode() {
    this.noScrollMenu = !this.noScrollMenu
  }


  onMouseEnter(parenItem: HTMLElement, color:string) {
    parenItem.style.backgroundColor = color;
  }

  onMouseOut(parenItem: HTMLElement, color:string, active:any) {
    if(active !== this.openItemSubParent) {
      parenItem.style.backgroundColor = color;  
    }
    
  }

  getUrlVars():string {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('language') ?? 'es';
  }
}
