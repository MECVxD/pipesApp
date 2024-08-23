import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localeEsMX from '@angular/common/locales/es-MX';
import localeEsHN from '@angular/common/locales/es-HN';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';
import { ProductsModule } from './products/products.module';

registerLocaleData(localeEsMX);
registerLocaleData(localeEsHN);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
