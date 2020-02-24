import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() emitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  resetFiles() {
    this.emitter.emit();
  }

}
