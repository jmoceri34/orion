import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NavComponent } from "../nav/nav.component";
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTooltipModule, MatToolbarModule,
  MatBadgeModule, MatBottomSheetModule, MatSelectModule, MatTableModule, MatTabsModule, MatTreeModule
} from '@angular/material';

@NgModule({
  declarations: [
      NavComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
      MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
      MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
      MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
      MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTooltipModule, MatToolbarModule,
      MatBadgeModule, MatBottomSheetModule, MatSelectModule, MatTableModule, MatTabsModule, MatTreeModule
    ],
  exports: [
    NavComponent
  ]
})

export class PublicLayoutModule { }
