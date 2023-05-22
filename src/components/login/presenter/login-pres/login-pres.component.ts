import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidation, usernameValidation } from '../../../../app/utils/regex/auth-regex';

@Component({
  selector: 'login-pres',
  templateUrl: './login-pres.component.html',
  styleUrls: ['./login-pres.component.scss']
})
export class LoginPresComponent {
  public authForm: FormGroup;

  constructor(public _formBuilder: FormBuilder) {
    this.authForm = this._formBuilder.group({
      username : ['', [Validators.required, Validators.maxLength(50), usernameValidation]],
      password : ['', [Validators.required, passwordValidation]]
    });
  }
  checked = false;
}
