import { Component, OnInit, Input, Injectable } from "@angular/core";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { ElectorServiceService } from "src/app/services/elector-service.service";
export interface User {
  name: string;
  address: string;
  choice: string;
}

@Component({
  selector: "app-elector-new",
  templateUrl: "./elector-new.component.html",
  styles: []
})
@Injectable()
export class ElectorNewComponent {
  myForm: FormGroup;
  @Input()
  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private electorService: ElectorServiceService
  ) {
    this.myForm = this.fb.group({
      name: "",
      address: "",
      choice: ""
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  getInfo(form: NgForm) {
    console.log(form.value);
    this.users.push(form.value);
    this.electorService.myMethod(this.users);
  }
}
