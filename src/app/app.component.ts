import {Component, Injector} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Overlay, OverlayConfig, OverlayRef} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {OverlayComponentComponent} from "../overlay-component/overlay-component.component";
import {debounceTime} from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OverlayTest';
  private readonly ESCAPE_KEY = 'Escape';
  private overlayPanel!: OverlayRef;

  constructor(private overlay: Overlay) {
  }

  openOverlay(event: Event): OverlayRef | void {
    if (!event || !event.currentTarget) {
      return;
    }
    const origin = event.currentTarget as HTMLElement;
    if (!origin) {
      return;
    }
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(origin)
      .withPositions([
          {originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom'},
          {originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom'},
          {originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top'},
          {originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top'}])
      .withFlexibleDimensions(true)
      .withPush(true);


    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      positionStrategy: positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
    const overlayRef = this.overlay.create(overlayConfig);

    const injector = Injector.create({
      providers: [
        {provide: OverlayRef, useValue: overlayRef},
      ]
    });
    const overlayPortal = new ComponentPortal(OverlayComponentComponent, null, injector);
    overlayRef.attach(overlayPortal);

    overlayRef.backdropClick().pipe(debounceTime(100)).subscribe((event: MouseEvent) => {
      this.closeOverlay();
    });

    overlayRef.outsidePointerEvents().pipe(debounceTime(100)).subscribe((event: MouseEvent) => {
      this.closeOverlay();
    });

    overlayRef.keydownEvents().pipe(debounceTime(100)).subscribe((event: KeyboardEvent) => {
      if (event.key === this.ESCAPE_KEY) {
        this.closeOverlay();
      }
    });
    this.overlayPanel = overlayRef;
    return overlayRef;
  }


  private closeOverlay(): void {
    this.overlayPanel?.dispose();
  }
}
