import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbersPage/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommonPage/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule
  ],
  exports: [],
})
export class ProductsModule {}
