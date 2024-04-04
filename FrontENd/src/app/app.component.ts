import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CrudComponent } from "./crud/crud.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AlertModule, CrudComponent,HttpClientModule]
})
export class AppComponent {
  title = 'Crud-app';
}
