import { Item } from './item';

export class List{
	
	name:string;
	finished:boolean;
	items:Item[];

	constructor(name:string){
			this.name = name;
			this.finished = false;
	}

}
