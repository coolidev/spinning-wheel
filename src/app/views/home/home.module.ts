import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeComponent } from './home.component';
import { WheelComponent } from 'src/app/components/wheel/wheel.component';
import { IconComponent } from 'src/app/components/wheel/icon/icon.component';
import { ItemComponent } from 'src/app/components/wheel/item/item.component';
import { SlotComponent } from 'src/app/components/wheel/slot/slot.component';
import { ActionComponent } from 'src/app/components/action/action.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    HomeComponent,
    HeaderComponent,
    WheelComponent,
    IconComponent,
    ItemComponent,
    SlotComponent,
    ActionComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
