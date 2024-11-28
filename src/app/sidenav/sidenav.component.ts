import { Component, Input, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Input() sidenavTitle: string = "";
  @Input() githubUsername: string = "";

  @ViewChild('drawer') drawer!: MatDrawer;
}
