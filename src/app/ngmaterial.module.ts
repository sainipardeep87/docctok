import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import {MatDatepickerModule,MatNativeDateModule, MatChipsModule, MatIconModule, MatAutocompleteModule} from '@angular/material/'


@NgModule({
  imports: [
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatExpansionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatIconModule, MatAutocompleteModule, MatProgressBarModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatExpansionModule, MatRadioModule, MatDatepickerModule, MatChipsModule, MatIconModule, MatAutocompleteModule, MatProgressBarModule
  ]
})
export class MaterialAppModule { }