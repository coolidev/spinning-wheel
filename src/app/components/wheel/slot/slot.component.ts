import { Component, Input } from '@angular/core';

@Component({
  selector: 'cw-circular-wheel-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss'],
})
export class SlotComponent {
  @Input() data: any;
  constructor() {}
}
