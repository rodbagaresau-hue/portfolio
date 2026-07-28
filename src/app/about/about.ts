import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  imports: [MatListModule, MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
