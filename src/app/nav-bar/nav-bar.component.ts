import { Component } from '@angular/core';
import { MatSlideToggleModule,  } from '@angular/material/slide-toggle';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  imports: [MatSlideToggleModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  
}
