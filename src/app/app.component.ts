import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'poke-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  /**
   * Activated app route
   * @type ActivatedRoute
   */
  public aRroute: ActivatedRoute;

  /**
   * Title of the app
   */
  title = 'Welcome to Poké-Cosmos';

  /**
   * The router
   * @type Router
   */
  public router: Router;

  ngOnChanges() {
    this.updateTitle();
  }

  /**
   * Changes the title on route change
   * @returns void
   */
  updateTitle(): void {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.aRroute)
      .map(route => {
        this.title = route.data.title;
      });
  }
}
