import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-about',
  imports: [MatListModule, ChipModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
