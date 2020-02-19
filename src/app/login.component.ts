import { Component, Input,OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'login',
   templateUrl: './login.html',
  styleUrls: [`./login.css`]
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
//         this.loginForm = this.formBuilder.group({
//             username: ['', Validators.required],
//             password: ['', Validators.required]
        };

//         // get return url from route parameters or default to '/'
//     }
//   cookBacon(){
// //this.name="mayank";
// this.router.navigate(['/register']);
// }
 form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      console.log('sdsss '+ this.form.value.password)
     // this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  //@Output() submitEM = new EventEmitter();
}
