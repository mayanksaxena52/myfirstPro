import { Component, Input,OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'login',
   templateUrl: './login.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class LoginComponent  implements OnInit{
   loginForm: FormGroup;
 constructor(
   private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {
     
    }
 ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
    }
  cookBacon(){
//this.name="mayank";
this.router.navigate(['/register']);
}
}
