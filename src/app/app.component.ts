import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public appPages = [
        // { title: 'Login', url: '/login', icon: 'paper-plane' },
        // { title: 'Cadastre-se', url: '/cadastro', icon: 'paper-plane' },
        { title: 'Feed da API', url: '/feed', icon: 'paper-plane' },
        { title: 'Info do Desenvolvedor', url: '/info', icon: 'archive' },
    ];
    constructor() { }
}
