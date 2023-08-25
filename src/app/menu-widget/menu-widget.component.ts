import { Component, Input, OnInit } from '@angular/core';
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
})
export class MenuWidgetComponent implements OnInit {
  @Input() color: string = '';
  public text: string = 'hola';
  public data!: MenuWidgetInterface;
  isMenuOpen: boolean = true;
  mainOptions!: MenuOptions;
  subOptions: MenuSubOptions[] = [];
  insideOptions: MenuInsideOptions[] = []; 
  panelOpenState1: boolean = false;
  panelOpenState2: boolean = false;
 
  constructor(
    private menuService: MenuService,
    private setDTO: SetmenuDTOService,
    
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
  togglePanel1() {
      this.panelOpenState1 = !this.panelOpenState1     
  }
  togglePanel2() {
    this.panelOpenState2 = !this.panelOpenState2   
  }
  toggleOpen() {//item: MenuOptions
    this.data.options.forEach(item=>item.isOpen=false);
    //item.isOpen!=item.isOpen
  }
}
