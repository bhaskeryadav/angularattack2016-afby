import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {BookCenterComponent} from './components/books/book-center.component';
import {HomeComponent} from './components/home/home.component';
import { BookService } from './components/books/book.service';
import {AboutUsComponent} from './components/home/about-us/about-us.component';
import {LoginService} from './components/users/login.service';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [BookService,LoginService],
    template: `
    <div (click)="onclick()" class="well well-sm">
        <div class="page-header">
            <h2 class="text-center"><b>Sher'e Book</b></h2>
            <img style=" width: 100%;height: auto;" src="../images/ShereBook.jpg" class="center-block">
        </div>
    </div>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    { path: '/books/...', name: 'BookCenter', component: BookCenterComponent },
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/aboutUs', name: 'AboutUs', component: AboutUsComponent }
])
export class AppComponent {

    constructor(private router: Router) { }

    onclick() {
        this.router.navigate(['Home'])
    }

}
