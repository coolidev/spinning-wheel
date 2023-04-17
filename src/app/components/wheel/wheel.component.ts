import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cw-circular-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss'],
})
export class WheelComponent implements OnChanges {
  private angle: number = 0;
  @Input() spinning: number = 0;
  @Input() data: any;
  @Output() selectedAngle = new EventEmitter<number>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['spinning'] !== undefined && changes['spinning'].currentValue === changes['spinning'].previousValue + 1) {
      this.setAngle()
    }
  }

  getRotatedStyle() {
    return 'rotate('+ this.angle.toString() + 'deg)';
  }

  setAngle() {
    this.angle += Math.ceil(Math.random() * 3600);
    setTimeout(() => {
      this.selectedAngle.emit(this.angle)
    }, 5000)
  }
}
