import { Pipe, PipeTransform } from '@angular/core';
import { List }                from '../classes/index';

@Pipe({
	name:'filter'
})

export class FilterPipe implements PipeTransform{
	transform( lists:List[], state:boolean = false ):List[]{

		let lista:List[] = [];
		
		for(let list of lists){
			if(list.finished == state){
				lista.push(list);
			}			
		}

		return lista;

	}
}