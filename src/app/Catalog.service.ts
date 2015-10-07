import {Song} from './song';

export class CatalogService {
	getSongs() {
		return Songs;
	};
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
