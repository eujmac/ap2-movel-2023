import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from '../autenticacao.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public email: string = '';
    public senha: string = '';
    public mensagem: string = '';

    constructor(
        public autenticacaoService: AutenticacaoService,
        public router: Router,
        public toastController: ToastController) {
    }

    ngOnInit() {
    }

    loginUsuario() {
        this.autenticacaoService.login(this.email, this.senha)
            .then((res) => {
                this.router.navigate(['feed']);
            })
            .catch((error) => {
                this.mensagem = 'E-mail ou senha inválida';
                this.exibeMensagem();
            })

    }

    async exibeMensagem() {
        const toast = await this.toastController.create({
            message: this.mensagem,
            duration: 2000,
            position: 'bottom',
        });

        await toast.present();
    }


}
