import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
      this.router.navigate(['/login']);
    }

}
