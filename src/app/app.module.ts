import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './component/tree/tree.component';
import { LedListComponent } from './component/led-list/led-list.component';
import { LedComponent } from './component/led/led.component';
import { ToolsComponent } from './component/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    LedListComponent,
    LedComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
