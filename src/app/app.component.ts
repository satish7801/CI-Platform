import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Route: string = "recipe";

  SelecteTheComponent(path: string){
      this.Route = path;
  }
}
