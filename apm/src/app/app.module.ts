import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailGuard } from './product-detail/product-detail.guard';

// order matters! always more specific to less specific. the first found will be used
// const routes: Routes = [
//   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
//   { path: 'welcome', component: WelcomeComponent },
//   { path: 'products', component: ProductListComponent },
//   { path: 'products/:id', component: ProductDetailComponent },
//   { path: '**', component: PageNotFoundComponent },
// ];
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard], //assign this guard to this url
    component: ProductDetailComponent,
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
