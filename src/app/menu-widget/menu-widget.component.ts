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

@Component({
  selector: 'app-menu-widget',
  templateUrl: './menu-widget.component.html',
  styleUrls: ['./menu-widget.component.scss'],
})
export class MenuWidgetComponent implements OnInit {
  @Input() color: string = '';
  public text: string = 'hola';
  public data:any  = false;
  isMenuOpen: boolean = true;
  mainOptions!: MenuOptions;
  subOptions: MenuSubOptions[] = [];
  insideOptions: MenuInsideOptions[] = []; 

  openItemParent:null|number = null;
  openItemSubParent:null|number = null;
  urlSite = environment.url;
  constructor(
    private menuService: MenuService,
    private setDTO: SetmenuDTOService,
  ) {}

  ngOnInit(): void {
    this.menuService.fetchMenuData().subscribe((response: any) => {
      this.data = response.data
    },
    error => {
      this.data = false;
      const bodyTag = document.body;
      bodyTag.style.height = '0px';
    });
  }

  toggleMenu(index: number) {
    this.openItemSubParent = null;
    if(this.openItemParent === index) {
      this.openItemParent = null;
    }
    else {
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
  } 

  closeAll(){
    this.openItemParent = null;
    this.openItemSubParent = null;
  }
}
