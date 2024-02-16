import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Combo } from './models/combo';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  @Input() label: string = '';
  @Input() combo: Combo[] = [];

  _selectedValue!: string | number;
  get selectedValue(): string | number {
    return this._selectedValue;
  }
  @Input() set selectedValue(selectedValue: string | number) {
    if (this._selectedValue === selectedValue) return;
    this._selectedValue = selectedValue;
    this.selectedValueChange.emit(selectedValue);
    this.selectedCombo.emit(this.getComboByValue(selectedValue));
  }
  @Output() selectedValueChange = new EventEmitter();

  @Output() selectedCombo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getComboByValue(value: any) {
    if (!value) return;
    return this.combo.find(item => item.value === value);
  }

}
