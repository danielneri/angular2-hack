import {Song} from './song';

export class CatalogService {
	getSongs() {
		return Songs;
	};
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
		title: "",
		duration: 5,
		musicalKey: "G"		
	},
	{
		title: "",
		duration: 5,
		musicalKey: "G"		
	}
];
