import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent} from './shopping-list/shopping-list.component';  
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import { PaymentComponent } from './payment/payment.component';
import { DataComponent } from './data/data.component';
import { PlanComponent } from './plan/plan.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component'
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from  './registration/registration.component'

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children: [
        {path:'', component: RecipeStartComponent },
        {path: 'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'payment', component: PaymentComponent },
    { path: 'data' ,component:DataComponent },
    { path: 'plan' ,component: PlanComponent  },
    { path: 'subscriptions', component:SubscriptionsComponent },
    { path: 'login',component: LoginComponent},
    { path: 'registration', component:RegistrationComponent}

]

@NgModule({
   imports : [RouterModule.forRoot(appRoutes)],
   exports : [RouterModule]
})
export class AppRoutingModule{

}