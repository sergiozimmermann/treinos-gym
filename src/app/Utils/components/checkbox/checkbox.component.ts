import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() id?: string;
  @Input() label?: string;
  @Input() value?: boolean;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
