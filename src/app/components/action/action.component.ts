import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent {
  disabledBtn: boolean = false;
  @Input() spinWheel: any;
  @Input() selectedIndex: number = 0;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}
  addNewItem(value: string) {
    this.disabledBtn = true;
    this.newItemEvent.emit(value);
    setTimeout(() => {
      this.disabledBtn = false;
    }, 5000)
  }
}
