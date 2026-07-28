import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
