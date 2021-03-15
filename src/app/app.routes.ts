import {Routes} from '@angular/router';
import {UserRegistration} from './components/userRegistration';
import {DashBord} from './components/dashBord';
import {Login} from './components/login';
import {AdminCategory} from './components/adminCategory';
import {AdminProduct} from './components/adminProduct';

export const routes: Routes = [
{path: 'register', component: UserRegistration},
{path: 'dashbord', component: DashBord},
{path: 'login', component: Login},
{path: 'category', component: AdminCategory},
{path: 'product', component: AdminProduct}
];
