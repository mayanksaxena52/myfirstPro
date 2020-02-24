
import { DOCUMENT } from "@angular/common";
import { Component, HostListener, Inject, OnInit,ViewChild } from "@angular/core";
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 
   @ViewChild(IgxNavigationDrawerComponent) public navdrawer: IgxNavigationDrawerComponent;
  name = 'Angular';
   show=true;
constructor( 
        private route: ActivatedRoute,
        private router: Router
    ) {
      this.router.navigate(['/register']);
    }
    
    

    public ngOnInit() {
     
       console.log(this.navdrawer);
    }
public navigate(item) {
    this.router.navigate(['/list']);
  }
submit() {
    // if (this.form.valid) {
    //   console.log('sdsss '+ this.form.value.password);
      this.router.navigate(['/list']);
     // this.submitEM.emit(this.form.value);
    // }
  }
}
 