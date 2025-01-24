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
    {name: 'Sheep', sound: 'Baa!'},
    {name: 'Duck', sound: 'Quack!'},
    {name: 'Horse', sound: 'Neigh!'},
    {name: 'Pig', sound: 'Oink!'},
    {name: 'Chicken', sound: 'Cluck!'},
    {name: 'Goat', sound: 'Bleat!'},
    {name: 'Lion', sound: 'Roar!'},
    {name: 'Elephant', sound: 'Trumpet!'},
    {name: 'Frog', sound: 'Ribbit!'},
    {name: 'Bird', sound: 'Tweet!'},
    {name: 'Bee', sound: 'Buzz!'},
    {name: 'Snake', sound: 'Hiss!'},
    {name: 'Owl', sound: 'Hoot!'},
    {name: 'Monkey', sound: 'Ooh ooh aah aah!'},
    {name: 'Wolf', sound: 'Howl!'},
    {name: 'Bear', sound: 'Growl!'},
    {name: 'Turkey', sound: 'Gobble!'},
    {name: 'Crow', sound: 'Caw!'},
    {name: 'Dolphin', sound: 'Click!'},
    {name: 'Whale', sound: 'Whale song!'},
    {name: 'Seal', sound: 'Arf!'},
    {name: 'Rooster', sound: 'Cock-a-doodle-doo!'},
    {name: 'Parrot', sound: 'Squawk!'},
    {name: 'Cricket', sound: 'Chirp!'},
    {name: 'Donkey', sound: 'Hee-haw!'},
    {name: 'Peacock', sound: 'Scream!'}
  ];
   constructor(@Optional() private overlayRef: OverlayRef) {
   }

   closeOverlay(): void {
     this.overlayRef.dispose();
   }
}
