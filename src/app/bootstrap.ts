import {bind, bootstrap} from 'angular2/angular2';
import {routerBindings, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {CharacterService} from './character.service';
import {AppComponent} from './app.component';
import {SetListService} from './setlist.service';

bootstrap(AppComponent, [
	routerBindings(AppComponent),
	CharacterService,
	SetListService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
