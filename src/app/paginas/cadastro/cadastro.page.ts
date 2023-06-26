import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../autenticacao.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

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

    cadastrarUsuario() {
        this.autenticacaoService.inserir(this.email, this.senha)
            .then((res) => {
                this.mensagem = 'Usuário cadastrado com sucesso';
                this.exibeMensagem();
                this.router.navigate(['login']);
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
