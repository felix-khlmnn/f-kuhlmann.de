import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { FooterComponent } from "./footer/footer.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, FooterComponent, SidenavComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projektübersicht';
  githubUsername = 'felix-khlmnn'
}
