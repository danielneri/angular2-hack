import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters.component';
import {DashboardComponent} from './dashboard.component';
import {CatalogComponent} from './catalog.component';
import {SetListComponent} from './setlist.component';
import {SetCreatorComponent} from './setcreator.component';

@Component({ selector: 'my-app' })
@View({
  template: `
  <ul class="nav nav-pills">
  <li role="presentation" class="active"><a [router-link]="['./Catalog']">Catalog</a></li>
  <li role="presentation"><a [router-link]="['./SetCreator']">Set Creator</a></li>
  <li role="presentation"><a [router-link]="['./SetList']">Set List</a></li>
</ul>    
    
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
