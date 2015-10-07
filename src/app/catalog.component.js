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
var Catalog_service_1 = require('./Catalog.service');
var CatalogComponent = (function () {
    function CatalogComponent(_catalogService) {
        this._catalogService = _catalogService;
        this.title = '';
        this.duration = 0;
        this.key = '';
    }
    Object.defineProperty(CatalogComponent.prototype, "songs", {
        get: function () {
            return this._songs || this.getSongs();
        },
        enumerable: true,
        configurable: true
    });
    CatalogComponent.prototype.addSong = function () {
        this._catalogService.addSong(this.title, this.duration, this.key);
    };
    // onSelect(song: Song) { this.currentSong = song; }
    /////////////////
    CatalogComponent.prototype.getSongs = function () {
        this._songs = [];
        this._songs = this._catalogService.getSongs();
        //  .then(characters => this._songs = characters);
        return this._songs;
    };
    CatalogComponent = __decorate([
        angular2_1.Component({ selector: 'my-songs' }),
        angular2_1.View({
            template: "\n    <h1>SONG CATALOG</h1>\n    <h2>Add a Song</h2>\n    <input [(ng-model)]=\"title\"  placeholder=\"title\"/><input [(ng-model)]=\"duration\"  placeholder=\"duration\"/><input [(ng-model)]=\"key\"  placeholder=\"key\"/>\n    <button (click)=\"addSong()\">Add Song</button>\n    <h2>Songs in the Catalog</h2>\n    <ul class=\"characters\">\n      <li *ng-for=\"#song of songs\" (click)=\"onSelect(song)\">\n        <span class=\"badge\">{{song.id}}</span> {{song.title}}</a>\n      </li>\n    </ul>\n    <h2 *ng-if=\"currentSong\">\n      {{currentSong.name | uppercase}} is my character\n    </h2>\n  ",
            directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.FORM_DIRECTIVES],
            styles: ["\n    .characters {list-style-type: none; margin-left: 1em; padding: 0; width: 14em;}\n    .characters li { cursor: pointer; }\n    .characters li:hover {color: #369; background-color: #EEE; }\n  "]
        }), 
        __metadata('design:paramtypes', [Catalog_service_1.CatalogService])
    ], CatalogComponent);
    return CatalogComponent;
})();
exports.CatalogComponent = CatalogComponent;
//# sourceMappingURL=catalog.component.js.map