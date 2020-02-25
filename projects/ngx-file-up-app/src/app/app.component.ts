import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() emitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  triggerOnSelected(files?: FileList) {
    console.log(files);
  }

  triggerOnUpload(files?: FileList) {
    console.log(files);
  }

  resetFiles() {
    this.emitter.emit();
  }

}
