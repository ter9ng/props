import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PersonService } from './shared'

@Component({
  moduleId: module.id,
  selector: 'props-no-app',
  templateUrl: 'props-no.component.html',
  styleUrls: ['props-no.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, PersonService]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent}
])
export class PropsNoAppComponent {
  title = 'props-no works!';
}
