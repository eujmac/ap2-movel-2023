import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlidesPageRoutingModule } from './slides-routing.module';
import { SlidesPage } from './slides.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SlidesPageRoutingModule
    ],
    declarations: [SlidesPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidesPageModule { }
