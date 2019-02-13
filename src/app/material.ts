import { MatCardModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatGridListModule],
  exports: [MatCardModule, MatButtonModule, MatGridListModule],
})

export class MaterialModule { }