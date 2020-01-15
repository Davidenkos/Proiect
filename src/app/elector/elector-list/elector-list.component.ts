import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { ElectorNewComponent } from "src/app/elector/elector-new/elector-new.component";
import { ElectorServiceService } from "src/app/services/elector-service.service";
export interface User {
  name: string;
  address: string;
  choice: string;
}

@Component({
  selector: "app-elector-list",
  templateUrl: "./elector-list.component.html",
  styleUrls: ["./elector-list.component.css"]
})
export class ElectorListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private service: MainService,
    private electorService: ElectorServiceService
  ) {
    console.log("rap");
    this.electorService.myMethod$.subscribe(data => {
      this.users = data;
      console.log("sadfksanlljkfas");
      console.log(data);
    });
  }

  ngOnInit() {}
}
