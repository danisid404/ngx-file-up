import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-file-up',
  templateUrl: './ngx-file-up.component.html',
  styleUrls: ['./ngx-file-up.component.css']
})
export class NgxFileUpComponent implements OnInit {

  @Input() prompt = 'Select Files';
  @Input() promptAllow = true;
  @Input() selectBtn = 'Select';
  @Input() uploadBtn = 'Upload';
  @Input() uploadBtnAllow = true;
  @Input() multiple = true;
  @Input() types = '*.*';
  @Input() ngxTriggerReset: EventEmitter<any>;
  @Output() ngxTriggerUpload: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() ngxTriggerSelected: EventEmitter<FileList> = new EventEmitter<FileList>();

  @ViewChild('fileInput', { static: false }) fileInputRef: ElementRef;
  selectedFiles: FileList;

  ngOnInit() {
    this.ngxTriggerReset.subscribe(() => {
      if (this.selectedFiles && this.selectedFiles.length > 0) {
        this.filesChanged(null);
      }
    });
  }

  filesChanged(files?: FileList): void {
    this.selectedFiles = files;
    (files) ? this.ngxTriggerSelected.emit(this.selectedFiles) : this.resetFileInput();
  }

  uploadFiles(): void {
    this.ngxTriggerUpload.emit(this.selectedFiles);
    this.resetFileInput();
  }

  resetFileInput(): void {
    this.fileInputRef.nativeElement.value = '';
  }

}
