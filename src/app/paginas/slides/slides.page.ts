import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
    index: any

    constructor(private storage: Storage) { }

    async ngOnInit() {
        await this.storage.create()
        this.index = this.storage.get("index")
        console.log(this.index);
        if (this.index == null) {
            console.log("Null ")
        }

        if (this.index == undefined) {
            console.log("undefined")
        }
        // if (this.index == null) {
        //     await this.storage.set('index', this.index)
        // } else {
        //     this.somaUmIndex()
        // }

    }

    async initIndex() {
        // await this.storage.set('index', this.index)
    }

    async somaUmIndex() {
        // this.index++
        // await this.storage.set('index', this.index)
    }

    naoExibirMais() {

    }
}
