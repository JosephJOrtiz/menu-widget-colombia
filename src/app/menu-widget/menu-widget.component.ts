import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../services/get-menu.service';

@Component({
  selector: 'app-menu-widget',
  templateUrl: './menu-widget.component.html',
  styleUrls: ['./menu-widget.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MenuWidgetComponent implements OnInit {
  @Input() color: string = '';
  public text: string = 'hola';
  public data: any;
  isMenuOpen: boolean = false;
  subOptions: any[] = [];
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.fetchMenuData().subscribe((response: any) => {
      this.data = response.data;
    });
  }

  public onClick(): void {
    this.text == 'hola' ? (this.text = 'adios') : (this.text = 'hola');
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  changeContent(items: any[]) {
    this.subOptions = items;
    console.log(this.subOptions);
  }
}
