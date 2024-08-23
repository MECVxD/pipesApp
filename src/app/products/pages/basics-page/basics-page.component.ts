import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public nameLower: string = 'mauricio';
  public nameUpper: string = 'Mauricio';
  public fullName: string = 'mAuRiCiO cOvArRuBiAs';

  public customDate: Date = new Date();
}
