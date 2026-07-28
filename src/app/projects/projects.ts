import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
