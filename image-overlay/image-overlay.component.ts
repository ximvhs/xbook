import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "xb-image-overlay",
  templateUrl: "./image-overlay.component.html",
  styleUrls: ["./image-overlay.component.scss"],
})
export class ImageOverlayComponent implements OnInit {
  @Input() imgSrc: string = "";
  @Output() closeOverlay = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  close(): void {
    this.closeOverlay.emit();
  }
}
