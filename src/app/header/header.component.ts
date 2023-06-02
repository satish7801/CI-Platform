import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() GetToPath = new EventEmitter<string>();

  GoToPath(path: string){
    this.GetToPath.emit(path);
  }
}
