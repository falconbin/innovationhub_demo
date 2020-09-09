import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatNativeDateModule } from '@angular/material/core';


const the_MaterialModules = [
  MatButtonModule,
  MatDividerModule,
  MatDialogModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatTableModule,
  MatDatepickerModule,
  MatSelectModule,
  MatPaginatorModule,
  MatIconModule,
  MatAutocompleteModule,
  MatInputModule,
  MatMenuModule,
  MatExpansionModule,
  MatNativeDateModule
];
@NgModule({
  declarations: [],
  imports: [
    the_MaterialModules
  ],
  exports: [
    the_MaterialModules
  ]
})
export class MaterialModule { }
