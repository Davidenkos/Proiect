import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatCheckboxModule } from "@angular/material";
import { MatChipsModule } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Proiect";
}
