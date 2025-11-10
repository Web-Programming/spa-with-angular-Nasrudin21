import { Routes } from '@angular/router';
import { Home as HomeComponent } from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Register } from './register/register';
import { Contact } from './contact/contact';

export const routes: Routes = [
    //mengatur halaman utama
    {
        path: '',
        component : HomeComponent,
        title: 'Home Page'
    },
        {
        path: 'Profile',
        component : Profile,
    },
        {
        path: 'Login',
        component : Login,
    },
        {
        path: 'Register',
        component : Register,
    },
        {
        path: 'contact',
        component : Contact,
    },
];
