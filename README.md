# NgxFileUp

File uploading plugin for AngularX applications.

## Install

Run `npm i ngx-file-up --save` to install and save as dependency.

## Import

Add `import { NgxFileUpModule } from 'ngx-file-up'` to your app module.
Then add `NgxFileUpModule` to ng module imports.

## Usage

Use plugin as follows

```html
<ngx-file-up></ngx-file-up>
```

## Options

### Directives

| Option            | Type         | Default Val  | Description                                         |
| ----------------- | ------------ | ------------ | --------------------------------------------------- |
| [prompt]          | string       | Select Files | Prompt message displayed before files select button |
| [promptAllow]     | boolean      | false        | Hide or show prompt message                         |
| [selectBtn]       | string       | Select       | The text inside files select button                 |
| [uploadBtn]       | string       | Up           | The text inside files upload button                 |
| [uploadBtnAllow]  | boolean      | tr           | Hide or show upload button                          |
| [multiple]        | boolean      | true         | Allow multiple files                                |
| [types]           | string       | "\*.\*"      | The list of allowed file types                      |
| [ngxTriggerReset] | EventEmitter |              | Event received as input to trigger plugin reset     |

### Events

| Event                  | Type                     | Description                                                              |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------ |
| `(ngxTriggerUpload)`   | `EventEmitter<FileList>` | Event handler to emit selected files when the "Upload" button is clicked |
| `(ngxTriggerSelected)` | `EventEmitter<FileList>` | Event handler to emit selected files when files are selected             |

### Usage [ngxTriggerReset]

`app.component.html`

```html
<div>
  <ngx-file-up
    [prompt]="'Upload Files Here'"
    [promptAllow]="true"
    [selectBtn]="'Choose File(s)'"
    [uploadBtn]="'Submit'"
    [multiple]="true"
    [uploadBtnAllow]="true"
    [ngxTriggerReset]="emitter"
  >
  </ngx-file-up>
  <br />
  <br />
  <div>This button will emit an event to remove all the selected files.</div>
  <br />
  <button class="ripple" (click)="resetFiles()" (ngxFileUpReset)="checkevent()">
    Reset Files
  </button>
</div>
```

`app.component.ts`

```
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

```

# Credit

Credit goes to "bjsawyer" for creating "mat-file-upload"
