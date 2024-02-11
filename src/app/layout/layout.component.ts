import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule
    , RouterModule
    , SharedModule
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
