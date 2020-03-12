
import { Component, Input,OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
   templateUrl: './register.component.html',
   styleUrls: [`./register.css`]
})
export class RegisterComponent  {

 loginForm: FormGroup;
 constructor(
   private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {
     
    }
  ngOnInit() {
        this.loginForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
              email: ['', Validators.required],
            password: ['', Validators.required],
              username: ['', Validators.required],
            cnf_password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
    }
//   cookBacon(){
// //this.name="mayank";
// this.router.navigate(['/register']);
// }
//  form: FormGroup = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//      email: new FormControl(''),
//      username: new FormControl(''),
//     password: new FormControl(''),
//      cnf_password: new FormControl(''),
//   });

  submit() {
    if (this.loginForm.valid) {
      console.log('sdsss '+ this.loginForm.value.password);
      this.router.navigate(['/login']);
    //  this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;
}
