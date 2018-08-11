import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { LedListComponent } from './components/led-list/led-list.component';
import { LedComponent } from './components/led/led.component';
import { ToolsComponent } from './components/tools/tools.component';

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
