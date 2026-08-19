import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    MatButtonModule,
    ButtonModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
