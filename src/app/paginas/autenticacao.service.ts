import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {
    constructor(public ngFireAuth: AngularFireAuth) { }

    public login(email: string, senha: string) {
        return this.ngFireAuth.signInWithEmailAndPassword(email, senha);
    }

    public inserir(email: string, senha: string) {
        return this.ngFireAuth.createUserWithEmailAndPassword(email, senha);
    }
}
