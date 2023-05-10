import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderPresComponent } from './app-header-pres.component';



@NgModule({
    declarations: [
        AppHeaderPresComponent
    ],
    exports: [
        AppHeaderPresComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AppHeaderPresModule { }
