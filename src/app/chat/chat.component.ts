import { Component, Input,OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'chat',
   templateUrl: './chat.html',
  styleUrls: [`./chat.css`]
})
export class ChatComponent  implements OnInit{
   loginForm: FormGroup;
   users: any= [
    {
      
      username: 'Angular',
      info: 'One framework. Mobile & desktop.',
     
    },
    {
     
      username: 'Facebook',
      info: 'Facebook helps you connect and share with the people in your life.',
   
    },
    {
    
      username: 'Google',
      info: "Google search - I'm feeling lucky.",
    
    },
    {
     
      username: 'Microsoft',
      info: "Be what's next.",
     
    }, {
      
      username: 'Angular',
      info: 'One framework. Mobile & desktop.',
     
    },
    {
     
      username: 'Facebook',
      info: 'Facebook helps you connect and share with the people in your life.',
   
    },
    {
    
      username: 'Google',
      info: "Google search - I'm feeling lucky.",
    
    },
    {
     
      username: 'Microsoft',
      info: "Be what's next.",
     
    }, {
      
      username: 'Angular',
      info: 'One framework. Mobile & desktop.',
     
    },
    {
     
      username: 'Facebook',
      info: 'Facebook helps you connect and share with the people in your life.',
   
    },
    {
    
      username: 'Google',
      info: "Google search - I'm feeling lucky.",
    
    },
    {
     
      username: 'Microsoft',
      info: "Be what's next.",
     
    },
  ]
 constructor(
   private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {
     
    }
    
  data: any[] = [];


  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      const item = { id: i, name: `Person ${i}`, email: `person${i}@gmail.com` };

      this.data.push(item);
    }
  }
  // ngOnInit() {
//         this.loginForm = this.formBuilder.group({
//             username: ['', Validators.required],
//             password: ['', Validators.required]
        // };

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

chat(user){
   console.log(user.username);
   this.router.navigate(['/register']);
}
  submit() {
    console.log('dfdfd')
   this.router.navigate(['/register']);
  }
  @Input() error: string | null;

  //@Output() submitEM = new EventEmitter();
}
