import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {CharacterService} from './character.service';
import {Character} from './character';

@Component({ selector: 'my-characters' })
@View({
  templateUrl: '/src/app/setlist.html',
  directives: [NgFor, NgIf],
  styles: [`
    .characters {list-style-type: none; margin-left: 1em; padding: 0; width: 14em;}
    .characters li { cursor: pointer; }
    .characters li:hover {color: #369; background-color: #EEE; }
  `]
})
export class SetListComponent {
  private _characters: Character[];
  public currentCharacter: Character;

  constructor(private _characterService: CharacterService) { }

  get characters() {
    return this._characters || this.getCharacters()
  }

  onSelect(character: Character) { this.currentCharacter = character; }

  /////////////////

  private getCharacters() {
    this._characters = [];

    this._characterService.getCharacters()
      .then(characters => this._characters = characters);

    return this._characters;
  }
}
