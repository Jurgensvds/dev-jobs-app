import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemeToggleButtonComponent } from './header/theme-toggle-button/theme-toggle-button.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

const ALL_COMPONENTS = [
  HeaderComponent,
  ThemeToggleButtonComponent
]

@NgModule({
  declarations: [
    ...ALL_COMPONENTS
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  exports: [
    ...ALL_COMPONENTS
  ]
})
export class SharedModule { }
