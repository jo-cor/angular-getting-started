import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
    <h1>{{ this.pageTitle }}</h1>
     <div>ma first component</div>
  </div>`,
})
export class AppComponent {
  pageTitle: string = 'Acme Prod Mgmt';
}
