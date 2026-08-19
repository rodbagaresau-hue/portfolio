import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    ButtonModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}