import {Component, Optional} from '@angular/core';
import {OverlayRef} from "@angular/cdk/overlay";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {provideNativeDateAdapter} from "@angular/material/core";

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-overlay-component',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatSelectModule, MatInputModule,
    MatFormFieldModule, MatDatepickerModule, CommonModule, FormsModule, MatCardModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './overlay-component.component.html',
  styleUrl: './overlay-component.component.css'
})
export class OverlayComponentComponent {
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
   constructor(@Optional() private overlayRef: OverlayRef) {
   }

   closeOverlay(): void {
     this.overlayRef.dispose();
   }
}
