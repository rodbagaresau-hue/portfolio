import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-about',
  imports: [MatListModule, MatChipsModule, ChipModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
