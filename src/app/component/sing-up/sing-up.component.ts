import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  signupForm !:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit (): void{
  this.signupForm= this.formBuilder.group({
    name:['',[Validators.minLength(3),Validators.required]],
    mail:['',[Validators.minLength(3),Validators.required]],
    phone:['',[Validators.minLength(6),Validators.required]],
    password:['',Validators.minLength(3)],
    confirmPwd:['']
  },
 {
     Validators:MustMatch('password',"confirmPwd")
 }
  )
  }

  signup(){
  console.log('here into signupform', this.signupForm.value)
  }
}
