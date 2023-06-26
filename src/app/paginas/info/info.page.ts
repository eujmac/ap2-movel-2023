import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
    selector: 'app-info',
    templateUrl: './info.page.html',
    styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    sair() {
        App.exitApp();
    }

}
