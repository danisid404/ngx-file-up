import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-file-up',
  templateUrl: './ngx-file-up.component.html',
  styleUrls: ['./ngx-file-up.component.css']
})
export class NgxFileUpComponent implements OnInit {

  @Input() labelText = 'Select File(s)';
  @Input() selectButtonText = 'Select File(s)';
  @Input() selectFilesButtonType: 'button' | 'menu' | 'reset' | 'submit' = 'button';
  @Input() uploadButtonText = 'Upload File(s)';
  @Input() uploadButtonType: 'button' | 'menu' | 'reset' | 'submit' = 'button';
  @Input() allowMultipleFiles = false;
  @Input() showUploadButton = true;
  @Input() acceptedTypes = '*.*';
  @Input() customSvgIcon?: string = null;
  @Input() ngxResetFilesEvent: EventEmitter<any>;
  @Output() uploadClicked: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() selectedFilesChanged: EventEmitter<FileList> = new EventEmitter<FileList>();

  @ViewChild('fileInput', { static: false }) fileInputRef: ElementRef;
  selectedFiles: FileList;

  ngOnInit() {
    this.ngxResetFilesEvent.subscribe(() => {
      if (this.selectedFiles && this.selectedFiles.length > 0) {
        this.filesChanged(null);
      }
    });
  }

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
