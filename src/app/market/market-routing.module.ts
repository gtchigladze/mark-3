import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DistributorRegistrationComponent } from "./distributor-registration/distributor-registration.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'distributor-registration'
  },
  {
    path: 'distributor-registration',
    component: DistributorRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketRoutingModule {}