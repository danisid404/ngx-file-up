# NgxFileUp

File uploading plugin for AngularX applications.

# Usage

## Install

Run `npm i ngx-file-up --save` to install and save as dependency.

## Import

Add `import { NgxFileUpModule } from 'ngx-file-up'` to your app module.
Then add `NgxFileUpModule` to ng module imports.

## Usage

Use plugin as follows

```html
<mat-file-upload></mat-file-upload>
```
or

```html
<mat-file-upload
  [labelText]="'Select a file (or multiple) to upload:'"
  [selectButtonText]="'Choose File(s)'"
  [selectFilesButtonType]="button"
  [uploadButtonText]="'Submit'"
  [uploadButtonType]="submit"
  [allowMultipleFiles]="true"
  [showUploadButton]="true"
  [customSvgIcon]="'close_custom'"
  [acceptedTypes]="'.png, .jpg, .jpeg'"
  (uploadClicked)="onUploadClicked($event)"
  (selectedFilesChanged)="onSelectedFilesChanged($event)"
>
</mat-file-upload>
```

## Options

### `@Input()` Properties

| Directive                 | Type      | Description                                                                                                    | Default Value    |
| ------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- | ---------------- |
| `[labelText]`             | `string`  | The text to be displayed for the file upload label                                                             | "Select file(s)" |
| `[selectButtonText]`      | `string`  | The text to be displayed for the button that allows the user to select file(s)                                 | "Select file(s)" |
| `[selectFilesButtonType]` | `string`  | The HTML "type" attribute of the "Select Files" button                                                         | "button"         |
| `[uploadButtonText]`      | `string`  | The text to be displayed for the button that allows the user to upload file(s)                                 | "Upload File(s)" |
| `[uploadButtonType]`      | `string`  | The HTML "type" attribute of the "Upload" button                                                               | "button"         |
| `[allowMultipleFiles]`    | `boolean` | True/false representing whether the user can select multiple files at a time                                   | false            |
| `[showUploadButton]`      | `boolean` | True/false representing whether the "Upload" button is shown in the DOM                                        | true             |
| `[customSvgIcon]`         | `string`  | The name of the custom svgIcon to be used as the "close" button; otherwise defaults to Material's "close" icon | null             |
| `[acceptedTypes]`         | `string`  | The list of file types that are allowed to be uploaded                                                         | "\*.\*"          |

### `@Output()` Properties

| Directive                | Type                     | Description                                                                                  |
| ------------------------ | ------------------------ | -------------------------------------------------------------------------------------------- |
| `(uploadClicked)`        | `EventEmitter<FileList>` | Event handler that emits the list of selected files whenever the "Upload" button is clicked  |
| `(selectedFilesChanged)` | `EventEmitter<FileList>` | Event handler that emits the list of selected files whenever the user changes file selection |
