import { Component, Input } from '@angular/core';

@Component({
  selector: 'cw-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() inlinesvg: string = '';
  constructor() {}
}
