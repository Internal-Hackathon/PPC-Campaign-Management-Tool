import { Validators } from "@angular/forms";

export const usernameValidation = Validators.pattern('^[a-zA-Z ]*$');
export const passwordValidation = Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})');
