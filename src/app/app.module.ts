import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasBoxComponent } from './hexanexus/components/canvas-box/canvas-box.component';
import { HexanexusUiComponent } from './hexanexus/components/hexanexus-ui/hexanexus-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasBoxComponent,
    HexanexusUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
