import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  @Input() label!: string;

  _data!: any;
  get data(): any {
    return this._data;
  }
  @Input() set data(data: any) {
    if (this._data === data) return;
    this._data = data;
    this.dataChange.emit(data);
  }
  @Output() dataChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
