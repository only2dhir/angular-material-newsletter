import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatInputModule, MatToolbarModule, MatDialogModule, MatTableModule, MatIconModule, MatMenuModule, MatFormFieldModule,
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatDialogModule, MatTableModule, MatIconModule,
    MatMenuModule, MatFormFieldModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatDialogModule, MatTableModule, MatIconModule,
    MatMenuModule, MatFormFieldModule],
})
export class CustomMaterialModule { }
