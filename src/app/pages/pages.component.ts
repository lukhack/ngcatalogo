import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SidebarService } from './../services/sidebar.service';
import { SettingsService } from './../services/settings.service';
import { Component, OnInit } from '@angular/core';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
