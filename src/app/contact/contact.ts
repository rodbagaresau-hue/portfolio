import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, ButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
