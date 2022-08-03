import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRoutingModule } from './market-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistributorRegistrationComponent } from './distributor-registration/distributor-registration.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';



@NgModule({
  declarations: [
    DistributorRegistrationComponent,
    ProductRegistrationComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[]
})
export class MarketModule { }
