import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle-button',
  templateUrl: './theme-toggle-button.component.html',
  styleUrls: ['./theme-toggle-button.component.scss']
})
export class ThemeToggleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onToggleTheme(): void {
    console.log("Here")
  }
}
