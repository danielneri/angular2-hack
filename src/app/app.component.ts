import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters.component';
import {DashboardComponent} from './dashboard.component';

@Component({ selector: 'my-app' })
@View({
  template: `
    <a [router-link]="['./Catalog']">Catalog</a>
    <a [router-link]="['./SetCreator']">Set Creator</a>
    <a [router-link]="['./SetList']">Set List</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Catalog', component: CatalogComponent },
  { path: '/setcreator', as: 'SetCreator', component: SetCreatorComponent },
  { path: '/setlist', as: 'SetList', component: SetListComponent }
])
export class AppComponent { }
