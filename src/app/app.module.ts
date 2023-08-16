import { DoBootstrap, NgModule, ApplicationRef, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuWidgetComponent } from './menu-widget/menu-widget.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, MenuWidgetComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [],
})
// export class AppModule {}
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(appRef: ApplicationRef) {
    const menuWidget = createCustomElement(MenuWidgetComponent, {
      injector: this.injector,
    });
    customElements.define('menu-widget', menuWidget);
  }
}
