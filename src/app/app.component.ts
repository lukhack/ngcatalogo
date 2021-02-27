import { map } from 'rxjs/operators';
import { SettingsService } from './services/settings.service';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from './services/sidebar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Catalogo';
  constructor(private settinService: SettingsService){



  }

  ngOnInit(): void {

  }
}
