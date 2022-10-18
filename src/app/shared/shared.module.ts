import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const ALL_COMPONENTS = [
  HeaderComponent
]

@NgModule({
  declarations: [
    ...ALL_COMPONENTS
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...ALL_COMPONENTS
  ]
})
export class SharedModule { }
