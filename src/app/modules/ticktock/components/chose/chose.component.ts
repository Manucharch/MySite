import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chose',
  standalone: false,
  templateUrl: './chose.component.html',
  styleUrl: './chose.component.scss',
})
export class ChoseComponent implements OnInit {
  idInp = input.required();

  ngOnInit(): void {}
}
