import { Component, Input, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: [`./register.css`]
})
export class RegisterComponent {
  loginForm: FormGroup;
  password_reuire: boolean;
  cnfpassword_reuire: boolean;
  submitted: boolean;
  password_val: boolean;
  cnf_password_val: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required
	],
      username: ["", Validators.required],
      cnf_password: ["", Validators.required],
      password: ["", Validators.required]
    });

  }

onChange(){
   this.password_reuire = false;
   this.password_val = false;
   this.cnfpassword_reuire = false;
      this.cnf_password_val = false;
}
  submit() {
    this.submitted = true;
    let pswd = this.loginForm.value.password;
 
    if (pswd.length == 0) {
      this.password_reuire = true;
      return;
    }if (pswd.length < 6) {
      this.password_val = true;
      return;
    }
    let cnf_pswd = this.loginForm.value.cnf_password;
   
    if (cnf_pswd.length == 0) {
      this.cnfpassword_reuire = true;
      return;
    }if (pswd != cnf_pswd) {
      this.cnf_password_val = true;
      return;
    }
    if (this.loginForm.invalid) {
      return;
    }
    console.log("sdsss " + this.loginForm.value.password);

    this.router.navigate(["/login"]);
    //  this.submitEM.emit(this.form.value);
  }
  @Input() error: boolean | null;
}
