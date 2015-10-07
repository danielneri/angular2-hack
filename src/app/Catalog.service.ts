import {Song} from './song';

export class CatalogService {
	getSongs() {
		return Songs;
	}
	addSong(title,duration,key){
		var newId = Songs.length;
		var tmpSong = new Song();
		tmpSong.id=newId;
		tmpSong.title = title;
		tmpSong.duration=duration;
		tmpSong.musicalKey =key;
		Songs.push(tmpSong);
	}
	// getCatalogs() { return Promise.resolve(Songs); }
	

	// getCatalog(id: number) {
	// 	return Promise.resolve(Songs)
	// 		.then((Songs) => { return Songs.filter((c) => {
	// 			return c.id === id;
	// 		})[0]});
	// }
}

var Songs : Song[] = [
	{
		id: 0,
		title: "Stairway to Heaven",
		duration: 6,
		musicalKey: "Am"		
	},
	{
		id: 1,
		title: "Something From Nothing",
		duration: 5,
		musicalKey: "Em"		
	}
];
