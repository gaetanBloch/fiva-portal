import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'fiva-portal-gb-button',
  templateUrl: './gb-button.component.html',
  styleUrls: ['./gb-button.component.scss'],
})
export class GbButtonComponent {
  text: string = 'Button';
}

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [GbButtonComponent],
  exports: [GbButtonComponent],
})
export class GbButtonComponentModule {}
