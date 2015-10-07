import {Component, NgFor, NgIf,FORM_DIRECTIVES, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Song} from './song';
import {CatalogService} from './Catalog.service';

@Component({ selector: 'my-songs' })
@View({
  template: `
    <h1>SONG CATALOG</h1>
    <h2>Add a Song</h2>
    <input [(ng-model)]="title"  placeholder="title"/><input [(ng-model)]="duration"  placeholder="duration"/><input [(ng-model)]="key"  placeholder="key"/>
    <button (click)="addSong()">Add Song</button>
    <h2>Songs in the Catalog</h2>
    <ul class="characters">
      <li *ng-for="#song of songs" (click)="onSelect(song)">
        <span class="badge">{{song.id}}</span> {{song.title}}</a>
      </li>
    </ul>
    <h2 *ng-if="currentSong">
      {{currentSong.name | uppercase}} is my character
    </h2>
  `,
  directives: [NgFor, NgIf,FORM_DIRECTIVES],
  styles: [`
    .characters {list-style-type: none; margin-left: 1em; padding: 0; width: 14em;}
    .characters li { cursor: pointer; }
    .characters li:hover {color: #369; background-color: #EEE; }
  `]
})
export class CatalogComponent {
  private _songs: Song[];
  public title = '';
  public duration = 0;
  public key = '';

  constructor(private _catalogService: CatalogService) { }

  get songs() {
    return this._songs || this.getSongs()
  }

  public addSong(){

    this._catalogService.addSong(this.title, this.duration,this.key);

  }

 // onSelect(song: Song) { this.currentSong = song; }

  /////////////////

  private getSongs() {
    this._songs = [];

    this._songs = this._catalogService.getSongs();
    //  .then(characters => this._songs = characters);

    return this._songs;
  }
}
