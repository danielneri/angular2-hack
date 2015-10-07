var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var catalog_component_1 = require('./catalog.component');
var setlist_component_1 = require('./setlist.component');
var setcreator_component_1 = require('./setcreator.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({ selector: 'my-app' }),
        angular2_1.View({
            template: "\n    <a [router-link]=\"['./Catalog']\">Catalog</a>\n    <a [router-link]=\"['./SetCreator']\">Set Creator</a>\n    <a [router-link]=\"['./SetList']\">Set List</a>\n    <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Catalog', component: catalog_component_1.CatalogComponent },
            { path: '/setcreator', as: 'SetCreator', component: setcreator_component_1.SetCreatorComponent },
            { path: '/setlist', as: 'SetList', component: setlist_component_1.SetListComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map