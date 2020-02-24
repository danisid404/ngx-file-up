import { NgModule } from '@angular/core';
import { NgxFileUpComponent } from './ngx-file-up.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxFileUpComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [NgxFileUpComponent]
})
export class NgxFileUpModule { }
