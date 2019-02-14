import { MatCardModule, MatButtonModule, MatGridListModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatGridListModule, MatTooltipModule],
  exports: [MatCardModule, MatButtonModule, MatGridListModule, MatTooltipModule],
})

export class MaterialModule { }