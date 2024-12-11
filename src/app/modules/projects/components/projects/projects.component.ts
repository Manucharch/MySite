import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  title1: string = 'Title';
  title2: string = 'Of My Project';

  subTitel: string = 'FullStack DEV';
  src: string = 'img/backgrounds/main6.jpg';

  constructor() {}

  ngOnInit(): void {}
}
