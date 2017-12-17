import { RouterModule, Routes } from '@angular/router';
import { DetailComponent }      from '../app/components/detail/detail.component';
import { HomeComponent }        from '../app/components/home/home.component';

const APP_ROUTES:Routes = [
    { path:'detail/:idx', component:DetailComponent },
    { path:'detail', component:DetailComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);