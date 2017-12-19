import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { List, Item }              from '../../classes/index';
import { ListService }       from '../../services/list.service'; 
import { Router }            from '@angular/router';
@Component({
    selector:'app-detail',
    templateUrl:'./detail.component.html'
})


export class DetailComponent implements OnInit {

    public idx:number;
    public list:List;

    constructor(private _activatedRoute:ActivatedRoute,
                private _listService:ListService,
                private _router:Router){

    }

    ngOnInit(){
        this._activatedRoute.params.subscribe(params => {
            this.idx = params['idx'];
            this.list = this._listService.getList(params['idx']);
        });
    }

    deleteList(){
        this._listService.removeList(this.idx);
        this._router.navigate(['detail']);
    }

    verify( item:Item ){

        item.finished = !item.finished;
        let todosMarcados = true;

        for(let item of this.list.items){
            if(!item.finished){
                todosMarcados = false;
                break;
            }
        }
        this.list.finished = todosMarcados;
        this._listService.updateInfo();

        console.log(this.list);
    }

    ready(){
        this._router.navigate(['detail']);
    }

}