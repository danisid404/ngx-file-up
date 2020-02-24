import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-file-up',
  templateUrl: './ngx-file-up.component.html',
  styleUrls: ['./ngx-file-up.component.css']
})
export class NgxFileUpComponent {

  @Input() labelText = 'Select File(s)';
  @Input() selectButtonText = 'Select File(s)';
  @Input() selectFilesButtonType: 'button' | 'menu' | 'reset' | 'submit' = 'button';
  @Input() uploadButtonText = 'Upload File(s)';
  @Input() uploadButtonType: 'button' | 'menu' | 'reset' | 'submit' = 'button';
  @Input() allowMultipleFiles = false;
  @Input() showUploadButton = true;
  @Input() acceptedTypes = '*.*';
  @Input() customSvgIcon?: string = null;
  @Output() uploadClicked: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() selectedFilesChanged: EventEmitter<FileList> = new EventEmitter<FileList>();

  @ViewChild('fileInput', { static: false }) fileInputRef: ElementRef;
  selectedFiles: FileList;

  filesChanged(files?: FileList): void {
    this.selectedFiles = files;
    (files) ? this.selectedFilesChanged.emit(this.selectedFiles) : this.resetFileInput();
  }

  uploadFiles(): void {
    this.uploadClicked.emit(this.selectedFiles);
    this.resetFileInput();
  }

  resetFileInput(): void {
    this.fileInputRef.nativeElement.value = '';
  }

}
