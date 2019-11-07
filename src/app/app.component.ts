import {Component, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';
import Swiper from "swiper";

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

    navEndEvents$.subscribe((event: NavigationEnd) => {
      //console.log("Entro: " + event.urlAfterRedirects);
      if (isPlatformBrowser(this.platformId)) {
        gtag('config', 'UA-149890792-1', {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }
}
