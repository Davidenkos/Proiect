import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MainService } from "src/app/services/main.service";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { MustMatch } from "src/app/helpers/must-match.validator";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loadedUsers = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private request: MainService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validator: MustMatch("password", "confirmPassword")
      }
    );
  }

  register(userData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    // Send Http request
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.toastr.success("New user created!", "Registration successful.");

    this.request.post(
      "https://proiect-78871.firebaseio.com/users.json",
      userData
    );
    this.router.navigate(["login"]);
  }

  get f() {
    return this.registerForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  validatePassword(password: string, confirmPassword: string) {
    return password == confirmPassword;
  }
}
