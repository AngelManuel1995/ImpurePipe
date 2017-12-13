import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-finished',
    templateUrl:'./finished.component.html'
})

export class FinishedComponent implements OnInit{

    public test:string = "Finished component works";

    constructor(){

    }

    ngOnInit() {
            
    }
}