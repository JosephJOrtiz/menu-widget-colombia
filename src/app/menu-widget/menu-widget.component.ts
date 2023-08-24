import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../services/get-menu.service';
import { SetmenuDTOService } from '../services/setmenu-dto.service';

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
  encapsulation: ViewEncapsulation.ShadowDom, 
})
export class MenuWidgetComponent implements OnInit {
  @Input() color: string = '';
  public text: string = 'hola';
  public data!: MenuWidgetInterface;
  isMenuOpen: boolean = true;
  mainOptions!: MenuOptions;
  subOptions: MenuSubOptions[] = [];
  insideOptions: MenuInsideOptions[] = [];
  constructor(
    private menuService: MenuService,
    private setDTO: SetmenuDTOService
  ) {}

  ngOnInit(): void {
    this.menuService.fetchMenuData().subscribe((response: any) => {
      this.data = this.setDTO.setMainDTO(response.data);
    });
  }

  public onClick(): void {
    this.text == 'hola' ? (this.text = 'adios') : (this.text = 'hola');
  }
  toggleMenu(item: any) {
    // this.isMenuOpen = !this.isMenuOpen;
    this.subOptions = [];
    this.insideOptions = [];

    this.mainOptions = item;
    this.subOptions = item.data;
  }
  changeContent(items: any[]) {
    this.insideOptions = [];
    this.insideOptions = items;
  }
  check(item: any) {
    console.log(item);
  }
}
