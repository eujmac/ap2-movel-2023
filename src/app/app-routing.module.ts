import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./paginas/slides/slides.module').then(m => m.SlidesPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'cadastro',
        loadChildren: () => import('./paginas/cadastro/cadastro.module').then(m => m.CadastroPageModule)
    },
    {
        path: 'feed',
        loadChildren: () => import('./paginas/feed/feed.module').then(m => m.FeedPageModule)
    },
    {
        path: 'info',
        loadChildren: () => import('./paginas/info/info.module').then(m => m.InfoPageModule)
    },
    {
        path: 'slides',
        loadChildren: () => import('./paginas/slides/slides.module').then(m => m.SlidesPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
