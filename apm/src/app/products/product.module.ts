import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from '../product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard], //assign this guard to this url
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    //along with the starComponent that now belongs to the SharedModule
    //these two are exported in the sharedModule which is used everywhere, so these can be removed
    // CommonModule,
    // FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class ProductModule {}
