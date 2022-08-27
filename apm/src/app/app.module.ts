import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './products/product.module';

// order matters! always more specific to less specific. the first found will be used
// const routes: Routes = [
//   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
//   { path: 'welcome', component: WelcomeComponent },
//   { path: 'products', component: ProductListComponent },
//   { path: 'products/:id', component: ProductDetailComponent },
//   { path: '**', component: PageNotFoundComponent },
// ];
const routes: Routes = [
  //these will be handled in the newly created module
  // { path: 'products', component: ProductListComponent },
  // {
  //   path: 'products/:id',
  //   canActivate: [ProductDetailGuard], //assign this guard to this url
  //   component: ProductDetailComponent,
  // },
  //but this belong to the main module
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    //This import contains errors, which may affect components that depend on this NgModule.
    //these components must be removed because we're importing the new ProductModule which already declares them
    // ProductListComponent,
    // ProductDetailComponent,
    // ConvertToSpacesPipe,
    // StarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule, //imported in productModule who really needs it
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
