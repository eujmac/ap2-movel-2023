import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app'
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { CharactersService } from 'src/app/rickAndMortyAPI/characters.service';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.page.html',
    styleUrls: ['./feed.page.scss'],
    providers: [CharactersService]
})
export class FeedPage {
    public lista_characters = new Array<any>();
    private pagina: number = 1;

    constructor(public charactersService: CharactersService, private loadingCtrl: LoadingController) { }

    ionViewDidEnter() {
        this.efeitoLoading();
        this.carregarPaginas();
    }

    public carregarPaginas() {
        if (this.pagina == 1) {
            this.lista_characters = new Array<any>();
        }

        this.charactersService.getAllCharacters(this.pagina).subscribe(
            data => {
                // se retornou o objeto json, retornou dentro da variável data
                let resultado = data as any;
                this.lista_characters = this.lista_characters.concat(resultado.results);
                console.log(this.lista_characters);
            },

            error => {
                // se nao retornou objeto json, deu erro.
                console.log(error);
            }

        )
    }

    async efeitoLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Carregando characters...',
            duration: 1500,
            spinner: 'lines-sharp-small'
        });

        loading.present();
    }

    efeitoRefresh(event: any) {
        this.pagina = 1;
        setTimeout(() => {
            // Any calls to load data go here
            event.target.complete();
        }, 2000);
        this.carregarPaginas();
    }

    efeitoScrollInfinito(ev: any) {
        this.pagina++;
        setTimeout(() => {
            (ev as InfiniteScrollCustomEvent).target.complete();
            this.carregarPaginas();
        }, 1000);
    }

    changeColor(status: string) {
        if (status == "Alive") {
            return "Success"
        }

        return "Medium"
    }
    sair() {
        App.exitApp();
    }
}
