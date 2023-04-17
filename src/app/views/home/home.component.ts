import { Component } from '@angular/core';
import { HomeService } from './home.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'Circular Wheel';
  spinning: number = 0;
  selectedIndex: number = 0;

  constructor(private homeService: HomeService) {}

  getSpinData() {
    return this.homeService.getSpinData()
  }

  spinWheel(event: any) {
    this.spinning = this.spinning + 1;
    this.homeService.setSpinData()
  }

  showSelectedIndex(idx: number) {
    this.selectedIndex = Math.ceil((idx % 360 + 9) / 18);
  }
}
